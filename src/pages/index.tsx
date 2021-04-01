import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

// // https://www.dejan.works/

const NewIndexPage = () => {
  return (
    <section className="h-screen w-full flex flex-col bg-gray-900 font-serif">
      <div className="hidden lg:inline-flex space-x-20 pt-8 mx-8">
        <div className="flex-1 group">
          <hr className="border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"/>
          <Link to="/projects/" className="text-white hover:text-green-300 transition-all duration-300 ease-linear">Projects</Link>
        </div>
        <div className="flex-1 group">
          <hr className="border-gray-400 group-hover:border-green-400 transition-all duration-300 ease-linear"/>
          <Link to="/contact/" className="text-white hover:text-green-300 transition-all duration-300 ease-linear">Contact</Link>
        </div>
      </div>
      <div className="text-left text-6xl lg:text-8xl ml-4 lg:ml-48 my-auto">
        <h1 className="text-white uppercase">Hello</h1>
        <h1 className="text-green-400 uppercase my-4">I'm</h1>
        <h1 className="text-green-400 uppercase">Isaiah</h1>
      </div>
      <Link to="/projects/" className="text-center text-white lg:hidden">Projects</Link>

    </section>
  );
}
export default NewIndexPage;
