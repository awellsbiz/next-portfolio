// built in link component to link to routes
import ScrollLink from './ScrollLink';

export default function Navbar() {
  return (
    <nav class="navbar sticky top-0 mx-auto flex items-center justify-center rounded-full p-2 shadow dark:bg-gray-700 max-w-xs bg-white z-50">
      <a class="btn btn-ghost rounded-full text-xl">Anthony Wells </a>
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
