// components/About.js
import Image from "next/image";
import Contact from "./Contact";
import Card from "./Card";

const About = () => (
  <Card id="about" className="card p-[var(--space-mobile-gap)] sticky top-0">
    <div className="flex justify-center">
      <div className="text-center flex flex-col items-center gap-4">
        <div className="avatar p-[calc(var(--space-mobile-gap)/2)]">
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
        <h2 className="inline-block text-xl bg-[var(--accent-surface)] text-[var(--accent-primary)] p-[calc(var(--space-mobile-gap)/2)] rounded-[var(--radius-card)]">
          Full Stack Software Developer
        </h2>
        <div>
          <p className="p-[var(--space-mobile-gap)]">
            I’m a creative engineer with a focus on web app development and digital
            marketing.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  </Card>
);

export default About;
