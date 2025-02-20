// special next.js images that speed up ssr caching
import Image from 'next/image';
import Contact from './contact';
import Projects from './projects';

export default function About() {
  return (
    <div id="about" class="p-4">
      <div class="outline outline-blue-400 p-10 min-w-1/3">
        <div class="text-center items-center space flex flex-col justify-around gap-4">
          <div class="avatar p-4">
            <div class="max-w-xs rounded-full">
              <Image
                src="/update.jpg"
                alt="Picture of the author"
                width={400}
                height={300}
              />
            </div>
          </div>
          <h1 class="text-5xl font-bold">Anthony Wells</h1>
          <h2 class="inline-block text-xl bg-slate-600 p-2 rounded-3xl">
            Full Stack Software Developer
          </h2>
          {/* <h3 class="text-1xl bg-slate-600 inline-block p-2 rounded-3xl">
            Digital Marketing
          </h3> */}
          {/* <p class="card card-body card-bordered">
            I'm a Skilled and experienced full-stack software engineer out of
            Los Angeles, CA. Drawing from my 12+ years of experience in the
            restaurant and entertainment sectors, I bring a high level of
            proficiency, structure, organization, and creative thinking to my
            software solutions.
            </p> */}
          <div class="outline outline-pink-400 w-3/5 p-2">
            <label> Skills...</label>
            <ul class="flex flex-wrap justify-center gap-3">
              <li class="badge badge-primary">Front-End </li>
              <li class="badge badge-primary">Back-End </li>
              <li class="badge badge-primary">Web-Design </li>
              <li class="badge badge-primary">Back-End </li>
              <li class="badge badge-primary">Back-End </li>
              {/* <li>Python | </li>
              <li>HTML | </li>
              <li>CSS | </li>
              <li>React | </li>
              <li>Django | </li>
              <li>Next.js | </li>
              <li>Node.js |</li>
              <li>Express | </li>
              <li>PostgreSQL | </li>
              <li>Sequelize | </li>
              <li>MongoDB | </li>
              <li>Git |</li>
              <li>GitHub</li> */}
            </ul>
          </div>
          <div class="outline outline-pink-400 w-3/5 p-2">
            <label> Tools </label>
            <ul class="flex flex-wrap justify-center gap-3">
              <li class="badge badge-primary">HTML</li>
              <li class="badge badge-primary">CSS </li>
              <li class="badge badge-primary"> JavaScript </li>
              <li class="badge badge-primary">React </li>
              <li class="badge badge-primary">Node </li>
              {/* <li>Python | </li>
              <li>HTML | </li>
              <li>CSS | </li>
              <li>React | </li>
              <li>Django | </li>
              <li>Next.js | </li>
              <li>Node.js |</li>
              <li>Express | </li>
              <li>PostgreSQL | </li>
              <li>Sequelize | </li>
              <li>MongoDB | </li>
              <li>Git |</li>
              <li>GitHub</li> */}
            </ul>
          </div>
          <Contact />
          <Projects />
        </div>
      </div>
    </div>
  );
}
