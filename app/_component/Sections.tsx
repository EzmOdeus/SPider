import { Tooltip } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoHomeSharp } from 'react-icons/io5';
import { SiNextdotjs } from 'react-icons/si';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

export default function Sections() {
      const [section, setsection] = useState("0");

  return (
<>
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
      </>
  );
}
