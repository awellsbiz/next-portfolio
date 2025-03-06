// components/Experience.js
const Experience = () => (
  <section className="mb-10 card bg-neutral-800 shadow-lg p-6">
    <h2 className="text-3xl font-bold mb-4">Experience</h2>
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-red-500">
        Digital Marketing Manager | Gateway Tax Service
      </h3>
      <p className="text-sm text-gray-400">
        December 2024 - Present | Inglewood, CA - Hybrid
      </p>
      <p className="mt-4 text-gray-300">
        Spearheaded the 2024 tax season digital marketing campaign by launching
        targeted Facebook, Instagram, and TikTok ads, driving a 15%+
        week-over-week increase in lead generation. Developed and standardized
        daily and weekly reporting documentation to track performance and
        optimize strategy. Led SEO improvements to enhance organic search
        rankings on Google, increasing website visibility and engagement.
        Continuously analyzed ad performance, leveraging A/B testing and
        audience insights to maximize ROI and improve ad efficiency across
        multiple platforms.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">Wordpress</span>
        <span className="badge badge-outline badge-error m-1">
          Social Media Ads
        </span>
        <span className="badge badge-outline badge-error m-1">SEO</span>
        <span className="badge badge-outline badge-error m-1">
          Instagram Ads
        </span>
        {/* Add more technologies as needed */}
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-red-500">
        Web Developer | Max Market Pros
      </h3>
      <p className="text-sm text-gray-400">
        December 2024 - Present | Ivine, CA - Hybrid
      </p>
      <p className="mt-4 text-gray-300">
        Built responsive websites for small businesses using Figma, Webflow,
        HTML, CSS, and JavaScript to ensure smooth user experiences across all
        devices. Helped clients generate more leads by applying SEO best
        practices and conversion-focused UX/UI designs. Also made the
        development process more efficient by creating style guides and reusable
        templates, boosting team productivity by 20%.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">HTML</span>
        <span className="badge badge-outline badge-error m-1">CSS</span>
        <span className="badge badge-outline badge-error m-1">Webflow</span>
        <span className="badge badge-outline badge-error m-1">SEO</span>
        {/* Add more technologies as needed */}
      </div>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-red-500">
        Full Stack Engineer | CSI Studios 
      </h3>
      <p className="text-sm text-gray-400">
      Oct 2023 - Dec 2023 | Los Angeles, CA
      </p>
      <p className="mt-4 text-gray-300">
        Led the requirement gathering and analysis for C&I Studios’ SVOD
        service, turning client needs into clear development docs and assets
        like wireframes, ERDs, and MVP plans. Redesigned the front end with
        React/TypeScript and built a backend API using Express and PostgreSQL
        for prototyping. Helped the client set up their tech stack via Homebrew
        CLI and integrated Git/GitHub for version control, creating a smoother,
        more collaborative workflow.
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="badge badge-outline badge-error m-1">React</span>
        <span className="badge badge-outline badge-error m-1">
          Typescript
        </span>
        <span className="badge badge-outline badge-error m-1">Firebase</span>
        {/* Add more technologies as needed */}
      </div>
    </div>
  </section>
);

export default Experience;
