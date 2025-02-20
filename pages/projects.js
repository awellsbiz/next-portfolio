import { AiOutlineLink } from 'react-icons/ai';

export default function Projects() {
  return (
    <div id="projects" class="outline outline-pink-400 p-2">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="/cinesearch.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            CineSearch
            <div className="badge badge-primary">Full Stack App</div>
          </h2>
          <p>Search for movies and TV shows</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">Node.js</div>
            <div className="badge badge-outline">Express</div>
            <div className="badge badge-outline">MongoDB</div>
            <div className="badge badge-outline">OMDB API</div>
          </div>
          <a
            href="https://cinesearch-mavericks.netlify.app/"
            class="flex justify-center"
          >
            <AiOutlineLink size={25} /> Visit Site
          </a>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="/PeakySS.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            Peaky Blinds
            <div className="badge badge-secondary">No Code App</div>
          </h2>
          <p>Website for a Blinds Company in Florida</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline badge-primary">Webflow</div>
            <div className="badge badge-outline">Javascript</div>
            <div className="badge badge-outline">Go High Level</div>
          </div>
          <a href="https://peakyblindsus.com/" class="flex justify-center">
            <AiOutlineLink size={25} /> Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}
