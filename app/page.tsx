"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [timer, settimer] = useState(false)
  const router = useRouter()
  useEffect(() => {
   
    setTimeout(() => {
 
      timer ? router.push("/start")
:<></>
    }, 6000)
  }, [timer])
  const handleroute = () => {
    settimer(!timer)
  }
  return (
    <div className="bg-black text-white h-[100vh] flex  p-3 flex-col justify-center items-center">
      <p className="text-red-700 font-extrabold text-center text-7xl">هل انت متأكد انك تريد الدخول لهذا الموقع</p>

      <div className="flex gap-3">
        <p className="text-red-800">الدخول علي مسئوليتك الخاصه</p>
        <p className="text-yellow-300">:تحذير</p>
      </div>
      <div className="flex gap-40">
        <button onClick={handleroute} className="bg-red-600  px-5 py-2 rounded-lg mt-20" >نعم</button>
        <button onClick={() => window.open("https://www.facebook.com/spiderxxxx","_self")} className="bg-green-600 px-5 py-2 rounded-lg mt-20 ">لا</button>

      </div>
      {
        timer ? <><div className="absolute h-full w-full top-0 justify-center items-center flex flex-col text-lg text-center  alert"><Image src="/seyam.png" className="z-50 mt-5" alt="logo" width={150} height={200} />عند الدخول، كن حذرًا!<br></br> لن تتمكن من الخروج. هذا هو تحذيرك الأخير لإنقاذ نفسك، وعائلتك، وكل أحبائك.<br></br> بمجرد دخولك، ستتغير حياتك تمامًا. <br /> هل أنت مستعد؟
</div></>
          : <></>
      }
    </div>


  );
}
