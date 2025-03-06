// pages/index.js
import Head from "next/head";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollableColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      // Only apply the effect if the screen width is 768px or larger (md breakpoint)
      if (window.innerWidth >= 768 && scrollableColumnRef.current) {
        event.preventDefault(); // Prevent default page scrolling
        scrollableColumnRef.current.scrollTop += event.deltaY; // Scroll only the third column
      }
    };

    // Attach event listener only on desktops
    if (window.innerWidth >= 768) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      // Cleanup event listener when component unmounts
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="text-white p-6 md:h-screen md:overflow-hidden">
      <Head>
        <title>Anthony Wells - Portfolio</title>
        <meta name="description" content="Anthony Wells' portfolio" />
      </Head>

      <main className="md:grid md:grid-cols-3 gap-4 h-full">
        {/* Column 1 - About (Sticky) */}
        <div className="md:col-span-1 space-y-4 h-full">
          <div className="md:sticky md:top-0 h-full flex flex-col">
            <About />
          </div>
        </div>

        {/* Column 2 - Skills & Projects (Sticky) */}
        <div className="md:col-span-1 space-y-4 h-full">
          <div className="md:sticky md:top-0 h-full flex flex-col gap-3">
            <Skills />
            <Projects />
          </div>
        </div>

        {/* Column 3 - The Only Scrollable Column */}
        <div
          ref={scrollableColumnRef}
          className="md:col-span-1 space-y-4 md:overflow-y-auto md:h-screen"
        >
          <Experience />
        </div>
      </main>
    </div>
  );
}