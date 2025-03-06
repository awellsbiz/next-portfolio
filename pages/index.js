// pages/index.js
import Head from "next/head";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="text-white p-6 h-screen overflow-hidden">
      <Head>
        <title>Anthony Wells - Portfolio</title>
        <meta name="description" content="Anthony Wells' portfolio" />
      </Head>
      
      {/* Use full height for the layout & prevent overall scrolling */}
      <main className="md:grid md:grid-cols-3 gap-4 h-full">
        
        {/* Column 1 - About (Sticky) */}
        <div className="md:col-span-1 space-y-4 h-full">
          <div className="md:sticky md:top-0 h-full flex flex-col">
            <About />
          </div>
        </div>

        {/* Column 2 - Skills & Projects (Sticky) */}
        <div className="hidden md:block md:col-span-1 space-y-4 h-full">
          <div className="md:sticky md:top-0 h-full flex flex-col">
            <Skills />
            <Projects />
          </div>
        </div>

        {/* Column 3 - The Only Scrollable Column */}
        <div className="hidden md:block md:col-span-1 space-y-4 overflow-y-auto h-screen">
          <Experience />
        </div>

      </main>
    </div>
  );
}