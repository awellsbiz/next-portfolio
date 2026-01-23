// components/Projects.js
import { AiOutlineLink } from 'react-icons/ai';
import Card from './Card';

const Projects = () => (
    <Card as="section" className="mb-10 p-[var(--space-mobile-gap)]">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div id="projects" className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Card className="card bg-[var(--surface-utility)] w-72">
          <figure className="px-[var(--space-mobile-gap)] pt-[var(--space-mobile-gap)]">
            <img src="/cinesearch.png" alt="CineSearch Project" className="rounded-[var(--radius-card)]" />
          </figure>
          <div className="card-body p-[var(--space-mobile-gap)]">
            <h2 className="card-title text-lg flex justify-center text-[var(--text-primary)]">
              CineSearch
              <div className="badge badge-primary badge-sm">Full Stack</div>
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">Search for movies and TV shows</p>
            <div className="card-actions justify-center flex-wrap gap-1">
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">React</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">Node.js</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">Express</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">MongoDB</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">OMDB API</div>
            </div>
            <a
              href="https://cinesearch-mavericks.netlify.app/"
              className="flex items-center justify-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <AiOutlineLink size={20} /> Visit Site
            </a>
          </div>
        </Card>

        <Card className="card bg-[var(--surface-utility)] w-72">
          <figure className="px-[var(--space-mobile-gap)] pt-[var(--space-mobile-gap)]">
            <img src="/PeakySS.png" alt="Peaky Blinds Project" className="rounded-[var(--radius-card)]" />
          </figure>
          <div className="card-body p-[var(--space-mobile-gap)]">
            <h2 className="card-title text-lg flex justify-center text-[var(--text-primary)]">
              Peaky Blinds
              <div className="badge badge-secondary badge-sm">No Code</div>
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">Website for a Blinds Company in Florida</p>
            <div className="card-actions justify-center flex-wrap gap-1">
              <div className="badge badge-outline badge-primary badge-sm text-[var(--accent-primary)]">Webflow</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">Javascript</div>
              <div className="badge badge-outline badge-sm text-[var(--accent-primary)]">Go High Level</div>
            </div>
            <a
              href="https://peakyblindsus.com/"
              className="flex items-center justify-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <AiOutlineLink size={20} /> Visit Site
            </a>
          </div>
        </Card>
        {/* Add more projects as needed */}
      </div>
    </Card>
  );
  
  export default Projects;
  