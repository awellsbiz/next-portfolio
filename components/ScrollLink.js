import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={250}
      offset={-50} // Adjust the offset as needed to align with your navbar
    >
      {children}
    </Link>
  );
};

export default ScrollLink;

