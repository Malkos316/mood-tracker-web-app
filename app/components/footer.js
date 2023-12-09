// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed inset-x-0 bottom-0">
      <a href="https://github.com/Malkos316" target="_blank" rel="noopener noreferrer" className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">GitHub</a>
      <span className="mx-2">|</span>
      <a href="https://www.linkedin.com/in/markus-luthi-b8961524b/" target="_blank" rel="noopener noreferrer" className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">LinkedIn</a>
      <span className="mx-2">|</span>
      <a href="mailto:Markus.Luthi@gmail.com" className=" p-1 pr-2 pl-2 rounded-md bg-secondary-100 hover:bg-secondary-200 ">Email</a>
    </footer>
  );
};

export default Footer;