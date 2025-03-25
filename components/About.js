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
            I’m a creative engineer with a background in filmmaking,
            photography, and 15+ years in the hospitality world. I’ve always
            been drawn to great stories, good design, and finding ways to make
            things more efficient and impactful. These days, I blend all of
            that—my eye for detail, love for travel and culture, and hands-on
            experience—with tech to build websites and digital solutions that
            actually connect with people. I use AI and modern tools to save
            time, simplify processes, and help businesses grow in smart,
            scalable ways.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  </div>
);

export default About;
