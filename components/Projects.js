// components/Projects.js
import { AiOutlineLink } from 'react-icons/ai';

const Projects = () => (
    <section className="mb-10 bg-neutral-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div id="projects" className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="card bg-gray-200 w-72 shadow-xl">
          <figure className="px-4 pt-4">
            <img src="/cinesearch.png" alt="CineSearch Project" className="rounded-lg" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg flex justify-center text-gray-800">
              CineSearch
              <div className="badge badge-primary badge-sm">Full Stack</div>
            </h2>
            <p className="text-sm text-gray-600">Search for movies and TV shows</p>
            <div className="card-actions justify-center flex-wrap gap-1">
              <div className="badge badge-outline badge-sm">React</div>
              <div className="badge badge-outline badge-sm">Node.js</div>
              <div className="badge badge-outline badge-sm">Express</div>
              <div className="badge badge-outline badge-sm">MongoDB</div>
              <div className="badge badge-outline badge-sm">OMDB API</div>
            </div>
            <a
              href="https://cinesearch-mavericks.netlify.app/"
              className="flex items-center justify-center gap-1 text-sm text-gray-700 hover:text-gray-900"
            >
              <AiOutlineLink size={20} /> Visit Site
            </a>
          </div>
        </div>

        <div className="card bg-gray-200 w-72 shadow-xl">
          <figure className="px-4 pt-4">
            <img src="/PeakySS.png" alt="Peaky Blinds Project" className="rounded-lg" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-lg flex justify-center text-gray-800">
              Peaky Blinds
              <div className="badge badge-secondary badge-sm">No Code</div>
            </h2>
            <p className="text-sm text-gray-600">Website for a Blinds Company in Florida</p>
            <div className="card-actions justify-center flex-wrap gap-1">
              <div className="badge badge-outline badge-primary badge-sm">Webflow</div>
              <div className="badge badge-outline badge-sm">Javascript</div>
              <div className="badge badge-outline badge-sm">Go High Level</div>
            </div>
            <a
              href="https://peakyblindsus.com/"
              className="flex items-center justify-center gap-1 text-sm text-gray-700 hover:text-gray-900"
            >
              <AiOutlineLink size={20} /> Visit Site
            </a>
          </div>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
  
  export default Projects;
  