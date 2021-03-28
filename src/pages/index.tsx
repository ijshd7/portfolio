import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

// // https://dribbble.com/shots/15291361-Toby-Brancher-Home-Desktop/attachments/7045604?mode=media
// // https://www.dejan.works/

const NewIndexPage = () => {
  return (
    <section className="h-screen w-full flex flex-col bg-gray-900 font-serif">
      <div className="hidden lg:inline-flex space-x-20 pt-8 mx-8">
        <div className="flex-1">
          <hr className="border-gray-400"/>
          <p className="text-white">Portfolio</p>
          <FontAwesomeIcon className="text-white bg-white" icon="coffee" />
        </div>
        <div className="flex-1">
          <hr className="border-gray-400"/>
          <p className="text-white">Contact</p>
        </div>
      </div>
      <div className="text-left text-6xl lg:text-8xl ml-4 lg:ml-48 my-auto">
        <h1 className="text-white uppercase">Hello</h1>
        <h1 className="text-green-400 uppercase my-4">I'm</h1>
        <h1 className="text-green-400 uppercase">Isaiah</h1>
      </div>
      <p className="text-center text-white lg:hidden">Tap anywhere</p>

    </section>
  );
}
export default NewIndexPage;
