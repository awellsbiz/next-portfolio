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
          <p className='p-4'>
            I’m a creative engineer with a focus on web development and digital
            marketing.
            During the week, I manage digital marketing for Gateway Tax
            Service crafting content, and optimizing webpages and 
            digital campaigns to boost engagement and leads. Outside of that, I
            have over 15 years in the hospitality world, currently bartending on
            weekends. <br /> <br /> Comming from a filmmaking
            and photography background, which fuels my creativity and attention
            to detail. I’m passionate about travel, design, and creating
            experyiences. Whether through tech, visuals, or great service I
            truly enjoy being apart of a team and connecting with people.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  </div>
);

export default About;
