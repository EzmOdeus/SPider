"use client";
import React, { useEffect, useRef, useState } from "react";
import BgGlitch from "../_component/BgGlitch";
import Link from "next/link";
import Hero from "../_component/Hero";
import { Tooltip } from "flowbite-react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoHomeSharp, IoMailSharp } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import Skills from "../_component/Skills";
import Projects from "../_component/Projects";

function Page() {
  const video = useRef(null);
  const [isend, setisend] = useState(false);
  const [section, setsection] = useState("0");
  const handleend = () => {
    setisend(!isend);
  };

  return (
    <div className="text-white">
      {section == "0" ? (
        <></>
      ) : (
        <div className="fixed z-50 top-[20%] right-3 h-[50%] flex flex-col justify-around  items-center p-3 rounded-3xl bg-green-700/20 shadow-2xl">
          <Tooltip content="Home" placement="left">
            <Link href="#" onClick={() => setsection("1")}>
              <IoHomeSharp color="#105d9b " size={25} />
            </Link>
          </Tooltip>

          <Tooltip content="Skills" placement="left">
            <Link href="#" onClick={() => setsection("2")}>
              <AiOutlineFundProjectionScreen color="#105d9b " size={25} />
            </Link>
          </Tooltip>
          <Tooltip content="Project" placement="left">
            <Link href="#" onClick={() => setsection("3")}>
              <SiNextdotjs color="#105d9b " size={25} />
            </Link>
          </Tooltip>
        </div>
      )}
      <div className={section != "0" ? "hidden" : ""}>
        {!isend ? (
          <video
            className="h-[100vh] object-cover w-[100vw]"
            ref={video}
            onEnded={handleend}
            autoPlay
          >
            <source src="/v1.mp4" />
          </video>
        ) : (
          <>
            <BgGlitch
              glitchColors={["#ff0000", "#00ff00", "#0000ff"]}
              glitchSpeed={2}
              characters="spider!@#$&*()-_+=/[]{};:<>.,0123456789"
              centerVignette={true}
              outerVignette={true}
              smooth={true}
            />
            <div className=" text-white h-[100vh] px-20 flex flex-col justify-center items-center text-center text-xl">
              <p className="bg-[#63636350] p-1 rounded-xl ">
                {" "}
                الآن بعد أن أصبحت تعرف كل شيء عني، دعنا نتابع رحلتنا في عالمي
                الواسع. <br /> سأصطحبك في جولة لتتعلم بعض الأشياء الأخرى عني.{" "}
                <br></br> لكن للأسف، سأضطر إلى قتلك بعد انتهاء الجولة لأنك عرفت
                الكثير عني. هل أنت مستعد لمتابعة الجولة؟
              </p>
              <div className="flex gap-40">
                <Link
                  href={""}
                  onClick={() => setsection("1")}
                  className="bg-red-600  px-5 py-2 rounded-lg mt-20"
                >
                  نعم
                </Link>
                <Link
                  href={""}
                  onClick={() => setsection("2")}
                  className="bg-green-600 px-5 py-2 rounded-lg mt-20 "
                >
                  لا
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {section == "0" ? (
        <></>
      ) : section == "1" ? (
        <>
          <Hero />
        </>
      ) : section == "2" ? (
        <>
          <Skills />
        </>
      ) : section == "3" ? (
        <>
          <Projects />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Page;
