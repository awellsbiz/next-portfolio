import React from 'react';

export default function ScrollLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();

    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
}
