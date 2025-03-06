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
    <div className="text-white p-6">
      <Head>
        <title>Anthony Wells - Portfolio</title>
        <meta name="description" content="Anthony Wells' portfolio" />
      </Head>
      <main className="block md:grid md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="md:col-span-1 space-y-4">
          {/* Sticky only on medium screens and above */}
          <div className="md:sticky md:top-0 md:h-screen">
            <About />
          </div>
          <div className="block md:hidden space-y-4">
            <Skills />
            <Projects />
            <Experience />
            <Education />
          </div>
        </div>

        {/* Column 2 */}
        <div className="hidden md:block md:col-span-1 space-y-4 md:sticky md:top-0 md:h-screen">
          <Skills />
          <Projects />
          <Education />
        </div>

        {/* Column 3 (Scrollable) */}
        <div className="hidden md:block md:col-span-1 space-y-1 overflow-y-auto h-screen">
          <Experience />
        </div>
      </main>
    </div>
  );
}