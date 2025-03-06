// components/About.js
import Image from "next/image";
import Contact from "./Contact";


const About = () => (
  <div id="about" class="card bg-neutral-800 shadow-lg p-4 sticky top-0">
    <div class="flex justify-center">
      <div class="text-center flex flex-col items-center gap-4">
        <div class="avatar p-2">
          <div class="max-w-xs rounded-full">
            <Image
              src="/update.jpg"
              alt="Picture of the author"
              width={300}
              height={200}
            />
          </div>
        </div>
        <h1 class="text-5xl font-bold">Anthony Wells</h1>
        <h2 class="inline-block text-xl bg-slate-600 p-2 rounded-2xl">
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
