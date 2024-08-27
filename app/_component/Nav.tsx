import { FaUser, } from "react-icons/fa";
import { IoHomeSharp, IoMailSharp } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { Button, Tooltip } from 'flowbite-react';
import React from 'react'
import Link from "next/link";

function Nav() {
    return (
        <div className='fixed z-50 top-[20%] right-3 h-[50%] flex flex-col justify-around items-center p-3 rounded-3xl bg-white/[0.02] shadow-2xl'>


            <Tooltip content="Home" placement="left" >
                <Link href='/'>
                    <IoHomeSharp color="#105d9b" size={20} />

                </Link>

            </Tooltip>
            <Tooltip content="About Me" placement="left">
                <Link href='/about'>

                    <FaUser color="#105d9b" size={20} />
                </Link>

            </Tooltip>
            <Tooltip content="Project&Skills" placement="left">
                <Link href='#'>

                    <SiNextdotjs color="#105d9b" size={20} />
                </Link>

            </Tooltip>
            <Tooltip content="Contact With Me" placement="left">
                <Link href='#'>
                    <IoMailSharp color="#105d9b" size={20} />

                </Link>

            </Tooltip>


        </div>
    )
}

export default Nav