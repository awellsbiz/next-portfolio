import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from '@/components/Sidebar';
import {AiOutlineFileText, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import Link from 'next/link';
import About from './about';
import Hero from './hero';


export default function Home() {

  const [isMobile, setIsMobile] = useState(false)

 

  return (
    
      
      
    <main>  
    {/* <Navbar /> */}
    <Hero />     
      {/* <Sidebar /> */}
    <About />
    </main>
  )
}