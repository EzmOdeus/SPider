"use client"
import React, { useEffect, useRef, useState } from 'react'
import Nav from '../_component/Nav'
import Link from 'next/link'
import Hero from '../_component/Hero'
import { Tooltip } from 'flowbite-react'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoHomeSharp, IoMailSharp } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'
import Skills from '../_component/Skills'
import Projects from '../_component/Projects'

function page() {
    const video = useRef(null)
    const [isend, setisend] = useState(true)
    const [section, setsection] = useState("0")
    console.log("🚀 ~ page ~ section:", section)
    const handleend = () => {
        setisend(!isend)
    }

    return (
        <div className='text-white'>
         {  section=="0"?<></>: <div className='fixed z-50 top-[20%] right-3 h-[50%] flex flex-col justify-around  items-center p-3 rounded-3xl bg-green-700/20 shadow-2xl'>


                <Tooltip content="Home" placement="left" >
                    <Link href='#home' onClick={() => setsection("1")}>
                        <IoHomeSharp color="#105d9b " size={25} />

                    </Link>

                </Tooltip>

                <Tooltip content="Skills" placement="left" >
                    <Link href='#' onClick={() => setsection("2")}>

                        <AiOutlineFundProjectionScreen color="#105d9b " size={25} />
                    </Link>

                </Tooltip>
                <Tooltip content="Project" placement="left">
                    <Link href='#' onClick={()=>setsection("3")}>
                        <SiNextdotjs color="#105d9b " size={25} />

                    </Link>

                </Tooltip>


            </div>}
            <div className={section != "0" ? "hidden" : ""}>{!isend ? <video className='h-[100vh] object-cover w-[100vw]' ref={video} onEnded={handleend} autoPlay>
                <source src='/v1.mp4' />
            </video> : <><div className="bg-black text-white h-[100vh] px-20 flex flex-col justify-center items-center text-center text-lg">Now that you know everything about me. let's continue our journey in my vast world. <br />I'll take you on a tour to learn a few more things about me.<br></br> But unfortunately. I'll have to kill you after the tour ends because you've learned too much about me. Are you ready to continue the tour?
                <div className="flex gap-40">
                    <Link href={""} onClick={() => setsection("1")} className="bg-red-600  px-5 py-2 rounded-lg mt-20" >Yes</Link>
                    <Link href={""} onClick={() => setsection("2")} className="bg-green-600 px-5 py-2 rounded-lg mt-20 ">No</Link>

                </div></div>
            </>}</div>
            {
                section == "0" ? <></> : section == "1" ? <>
                    <Hero /></> : section == "2" ? <>
               
                    <Skills /></> : section=="3"?<><Projects/></>:<></>
            }
        </div>
    )
}

export default page