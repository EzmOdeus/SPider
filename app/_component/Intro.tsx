"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LightRays from "./LightRays";
import FuzzyText from "./FuzzyText";

export default function Intro() {
  const [timer, settimer] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      timer ? router.push("/start") : <></>;
    }, 2000);
  }, [router, timer]);
  const handleroute = () => {
    settimer(!timer);
  };
  return (
    <div className="bg-gradient-to-b from-black to-[#ff01011f] text-white h-[100vh] flex  p-3 flex-col justify-center items-center ">
      <LightRays
        raysOrigin="top-center"
        raysColor="#a00f0f"
        raysSpeed={3}
        lightSpread={8}
        rayLength={80}
        followMouse={true}
        mouseInfluence={10}
        noiseAmount={0.0001}
        distortion={0.05}
        className="custom-rays"
      />
      <p className="text-red-700 font-extrabold text-center text-7xl">
        هل انت متأكد انك تريد الدخول لهذا الموقع
      </p>
      <div className="flex mt-5 gap-3">
        <FuzzyText>
          الدخول علي مسئوليتك الخاصه انت علي وشك الدخول لمنطقة خطره
        </FuzzyText>
        <p className="text-yellow-300">:تحذير</p>
      </div>
      <div className="flex gap-40">
        <button
          onClick={handleroute}
          className="bg-red-600  px-5 py-2 rounded-lg mt-20"
        >
          نعم
        </button>
        <button
          onClick={() =>
            window.open("https://www.facebook.com/spiderxxxx", "_self")
          }
          className="bg-green-600 px-5 py-2 rounded-lg mt-20 "
        >
          لا
        </button>
      </div>
      {timer ? (
        <>
          <div className="absolute h-full w-full top-0 justify-center items-center flex flex-col text-lg text-center  alert">
            <Image
              src="/slogo.png"
              className="z-50 mt-5"
              alt="logo"
              width={150}
              height={200}
            />
            عند الدخول، كن حذرًا!<br></br> لن تتمكن من الخروج. هذا هو تحذيرك
            الأخير لإنقاذ نفسك، وعائلتك، وكل أحبائك.<br></br> بمجرد دخولك،
            ستتغير حياتك تمامًا. <br /> هل أنت مستعد؟
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
