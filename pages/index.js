import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <About />
      <Contact />
    </div>
  );
}
