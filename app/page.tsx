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
    <div className="bg-black text-white h-[100vh] flex p-3 flex-col justify-center items-center">
      <p className="text-red-700 font-extrabold text-center text-7xl">Are You Sure Vist This Site?</p>

      <div className="flex gap-3"><p className="text-yellow-300">Warning:</p>
        <p className="text-red-950">Enter At Your Own Risk</p></div>
      <div className="flex gap-40">
        <button onClick={handleroute} className="bg-red-600  px-5 py-2 rounded-lg mt-20" >Yes</button>
        <button className="bg-green-600 px-5 py-2 rounded-lg mt-20 ">No</button>

      </div>
      {
        timer ? <><div className="absolute h-full w-full top-0 justify-center items-center flex flex-col text-lg text-center  alert"><Image src="/seyam.png" className="z-50 mt-5" alt="logo" width={150} height={200} />upon entering,beware!<br></br> you won&apos;t be able to exit This is your final waring to save yourself,your family and all your loved ones<br></br> once you enter your life will change completely. <br /> Are You Ready.?</div></>
          : <></>
      }
    </div>


  );
}
