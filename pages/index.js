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

      <main className="md:grid md:grid-cols-3 gap-4">
        {/* Column 1 - About (Sticky) */}
        <div className="md:col-span-1 space-y-4">
          <div className="md:sticky md:top-0 md:h-screen flex flex-col">
            <About />
          </div>
        </div>

        {/* Column 2 - Skills & Projects (Sticky) */}
        <div className="md:col-span-1 space-y-4">
          <div className="md:sticky md:top-0 flex flex-col gap-3">
            <Skills />
            <Projects />
          </div>
        </div>

        {/* Column 3 - Experience */}
        <div className="md:col-span-1 space-y-4">
          <Experience />
        </div>
      </main>
    </div>
  );
}