import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/pages/contact';
import { AiOutlineFileText, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import About from './about';
import Hero from './hero';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);
    }, 2000); // Adjust the delay as needed
    return () => clearTimeout(fadeInTimer);
  }, [isAnimationComplete]);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const navbar = <Navbar />; // Assign the Navbar component to a variable

  return (
    <main>
      {navbar}
      <Hero onAnimationComplete={handleAnimationComplete} />
      <About />
      <Projects />
      <Contact /> 
    </main>
  );
}