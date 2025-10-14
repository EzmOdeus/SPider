// components/FullDeviceInfo.js
'use client';

import { useState, useEffect } from 'react';

export default function FullDeviceInfo() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data:any= {};

        // --- جلب IP العام ---
        try {
          const ipRes = await fetch('https://api.ipify.org?format=json', { mode: 'cors' });
          if (ipRes.ok) {
            const ipData = await ipRes.json();
            data.publicIP = ipData.ip;
          } else {
            data.publicIP = 'فشل جلب الـ IP';
          }
        } catch (ipErr) {
          data.publicIP = 'غير متاح (تم حظر الطلب أو لا يوجد اتصال)';
        }

        // --- باقي المعلومات ---
        data.userAgent = navigator.userAgent;
        data.platform = navigator.platform;
        data.hardwareConcurrency = navigator.hardwareConcurrency || 'غير معروف';
        data.deviceMemory = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'غير معروف';
        data.maxTouchPoints = navigator.maxTouchPoints || 0;

        data.screen = {
          width: screen.width,
          height: screen.height,
          availWidth: screen.availWidth,
          availHeight: screen.availHeight,
          colorDepth: screen.colorDepth,
          pixelDepth: screen.pixelDepth,
          orientation: screen.orientation?.type || 'غير معروف',
        };

        data.language = navigator.language;
        data.languages = navigator.languages?.join(', ') || 'غير معروف';
        data.cookieEnabled = navigator.cookieEnabled;
        data.onLine = navigator.onLine ? 'متصل' : 'غير متصل';
        data.doNotTrack = navigator.doNotTrack || 'غير محدد';

        // كشف المتصفح
        const ua = navigator.userAgent;
        if (ua.includes('Firefox')) data.browserName = 'Firefox';
        else if (ua.includes('Edg')) data.browserName = 'Microsoft Edge';
        else if (ua.includes('Chrome') && !ua.includes('Edg')) data.browserName = 'Google Chrome';
        else if (ua.includes('Safari') && !ua.includes('Chrome')) data.browserName = 'Safari';
        else data.browserName = 'متصفح غير معروف';

        // كشف نظام التشغيل
        let os = 'نظام تشغيل غير معروف';
        if (ua.includes('Win')) os = 'Windows';
        else if (ua.includes('Mac')) os = 'macOS';
        else if (ua.includes('Linux')) os = 'Linux';
        else if (ua.includes('Android')) os = 'Android';
        else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
        data.os = os;

        // نوع الجهاز
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
        data.deviceType = isMobile ? 'هاتف أو لوحي' : 'حاسوب';

        // المنطقة الزمنية واللغة
        data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'غير معروف';
        data.locale = Intl.DateTimeFormat().resolvedOptions().locale || 'غير معروف';

        // الموقع الجغرافي (بإذن)
        data.location = 'في انتظار الإذن...';
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              setInfo(prev => ({
                ...prev,
                location: {
                  latitude: pos.coords.latitude,
                  longitude: pos.coords.longitude,
                  accuracy: `${pos.coords.accuracy} متر`,
                },
              }));
            },
            (err) => {
              setInfo(prev => ({
                ...prev,
                location: `ممنوع: ${err.message}`,
              }));
            },
            { timeout: 10000 }
          );
        } else {
          data.location = 'غير مدعوم';
        }

        // البطارية (إن وُجدت)
        if ('getBattery' in navigator) {
          try {
            const battery = await navigator.getBattery();
            data.battery = {
              level: `${Math.round(battery.level * 100)}%`,
              charging: battery.charging ? 'يشحن' : 'لا يشحن',
            };
          } catch {
            data.battery = 'غير متاح';
          }
        } else {
          data.battery = 'غير مدعوم';
        }

        // معلومات الشبكة
        if ('connection' in navigator) {
          const conn = navigator.connection;
          data.network = {
            effectiveType: conn.effectiveType || 'غير معروف',
            downlink: conn.downlink ? `${conn.downlink} Mbps` : 'غير معروف',
            rtt: conn.rtt ? `${conn.rtt} ms` : 'غير معروف',
            saveData: conn.saveData ? 'نعم' : 'لا',
          };
        } else {
          data.network = 'غير مدعوم';
        }

        setInfo(data);
      } catch (err) {
        setError('حدث خطأ: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    getInfo();
  }, []);

  if (loading) return <p>جاري تحميل معلومات الجهاز...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', direction: 'rtl' }}>
      <h2>معلومات كاملة عن جهازك والمتصفح</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>الـ IP العام:</strong> {info.publicIP}</li>
        <li><strong>نوع الجهاز:</strong> {info.deviceType}</li>
        <li><strong>نظام التشغيل:</strong> {info.os}</li>
        <li><strong>المتصفح:</strong> {info.browserName}</li>
        <li><strong>اللغة المفضلة:</strong> {info.language}</li>
        <li><strong>اللغات المدعومة:</strong> {info.languages}</li>
        <li><strong>المنطقة الزمنية:</strong> {info.timezone}</li>
        <li><strong>اللغة المحلية:</strong> {info.locale}</li>
        <li><strong>حالة الاتصال:</strong> {info.onLine}</li>
        <li><strong>Cookies مفعلة:</strong> {info.cookieEnabled ? 'نعم' : 'لا'}</li>
        <li><strong>Do Not Track:</strong> {info.doNotTrack}</li>
        <li><strong>نواة المعالج:</strong> {info.hardwareConcurrency}</li>
        <li><strong>ذاكرة الجهاز (RAM):</strong> {info.deviceMemory}</li>
        <li><strong>نقاط اللمس:</strong> {info.maxTouchPoints}</li>
        <li><strong>منصة النظام:</strong> {info.platform}</li>

        <li><strong>دقة الشاشة:</strong> {info.screen?.width} × {info.screen?.height}</li>
        <li><strong>المساحة المتاحة:</strong> {info.screen?.availWidth} × {info.screen?.availHeight}</li>
        <li><strong>عمق الألوان:</strong> {info.screen?.colorDepth} بت</li>
        <li><strong>اتجاه الشاشة:</strong> {info.screen?.orientation}</li>

        <li><strong>نوع الشبكة:</strong> {info.network?.effectiveType || 'غير معروف'}</li>
        <li><strong>سرعة التنزيل:</strong> {info.network?.downlink || 'غير معروف'}</li>
        <li><strong>تأخير الشبكة:</strong> {info.network?.rtt || 'غير معروف'}</li>
        <li><strong>توفير البيانات:</strong> {info.network?.saveData || 'غير معروف'}</li>

        <li><strong>البطارية:</strong> 
          {typeof info.battery === 'object' 
            ? `${info.battery.level} (${info.battery.charging})` 
            : info.battery}
        </li>

        <li><strong>الموقع الجغرافي:</strong> 
          {typeof info.location === 'object'
            ? `خط العرض: ${info.location.latitude}، خط الطول: ${info.location.longitude} (دقة: ${info.location.accuracy})`
            : info.location}
        </li>

        <li><strong>User-Agent:</strong> 
          <code style={{ display: 'block', background: '#f9f9f9', padding: '8px', borderRadius: '4px', overflowX: 'auto', marginTop: '6px', fontSize: '13px' }}>
            {info.userAgent}
          </code>
        </li>
      </ul>
    </div>
  );
}