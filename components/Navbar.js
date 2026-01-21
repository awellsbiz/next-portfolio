// built in link component to link to routes
import ScrollLink from './ScrollLink';

export default function Navbar() {
  return (
    <nav className="navbar sticky top-0 mx-auto flex items-center justify-center rounded-full p-[calc(var(--space-mobile-gap)/2)] shadow-[var(--shadow-inset-1)] max-w-xs bg-[var(--surface-utility)] z-50">
      <a className="btn btn-ghost rounded-full text-xl">Anthony Wells </a>
      <div className="dropdown">
        <div tabIndex="0" role="button" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-[var(--surface-card)] rounded-box z-[1] mt-3 w-52 p-[calc(var(--space-mobile-gap)/2)] shadow-[var(--shadow-inset-1)]"
        >
          <ScrollLink to="about">
            <li>About</li>
          </ScrollLink>
          <ScrollLink to="projects">
            <li>Projects</li>
          </ScrollLink>
          <ScrollLink to="contact">
            <li>Contact</li>
          </ScrollLink>
        </ul>
      </div>
    </nav>
  );
}
