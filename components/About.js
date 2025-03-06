// components/About.js
import Image from "next/image";
import Contact from "./Contact";


const About = () => (
  <div id="about" className="card bg-neutral-800 shadow-lg p-4 sticky top-0">
    <div className="flex justify-center">
      <div className="text-center flex flex-col items-center gap-4">
        <div className="avatar p-2">
          <div className="max-w-xs rounded-full">
            <Image
              src="/update.jpg"
              alt="Picture of the author"
              width={300}
              height={200}
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold">Anthony Wells</h1>
        <h2 className="inline-block text-xl bg-slate-600 p-2 rounded-2xl">
          Full Stack Software Developer
        </h2>
        <div>
          <p>
            Language- and framework-agnostic creative engineer who leverages AI
            to boost productivity, streamline design, document efficiently, and
            drive sales through smart, scalable solutions.
          </p>
        </div>
        <Contact />
    </div>
      </div>
    </div>
);

export default About;
