// built in link component to link to routes
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu} from 'react-icons/ai'
import { useState, useRef, useEffect } from "react";





export default function Navbar() {
    // useRef variable to get the navbar element and getboundingclientrect method
    const navbarRef = useRef(null)
    useEffect(() => {
        if(navbarRef.current) {
            const navbarRect = navbarRef.current.getBoundingClientRect();
            console.log(navbarRect)
        }
    }, [])

    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
   

    return (
      <nav ref={navbarRef} className="fixed w-full h-20 shadow-xl bg-white top-0">
           <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href="/">
            <Image
            src='/Logo5.png'
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
            />
            </Link>
            <div>
                <ul className="hidden sm:flex">
                    <Link href="/about">
                        <li className="ml-10 uppercase hover:border-b text-xl">About</li>
                    </Link>
                    <Link href='/services'>
                        <li className="ml-10 uppercase hover:border-b text-xl">services</li>
                    </Link>
                    <Link href='/projects'>
                        <li className="ml-10 uppercase hover:border-b text-xl">Projects</li>
                    </Link>
                    <Link href='/contact'>
                        <li className="ml-10 uppercase hover:border-b text-xl">Contact</li>
                    </Link>
                
                </ul>
            </div>
            <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>
            </div>
            <div className={
            menuOpen ? 'fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
            'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
        <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="curser-pointer">
            <AiOutlineClose size={25} />
            </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href='/'>
                    <li
                    onClick={()=> setMenuOpen(false)}
                    className="py-4 curser-pointer"
                    >
                        About
                    </li>
                </Link>
                <Link href='/'>
                    <li
                    onClick={()=> setMenuOpen(false)}
                    className="py-4 curser-pointer"
                    >
                        Services
                    </li>
                </Link>
                <Link href='/'>
                    <li
                    onClick={()=> setMenuOpen(false)}
                    className="py-4 curser-pointer"
                    >
                        Projects
                    </li>
                </Link>
                <Link href='/contact'>
                    <li
                    onClick={()=> setMenuOpen(false)}
                    className="py-4 curser-pointer"
                    >
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineLinkedin size={30} className="cursor-pointer" />
            <AiOutlineGithub size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
            <Image
            src='/Logo2.png'
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            />
            </Link>
        </div>

        </nav>
    )
}