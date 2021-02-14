import React from "react";
import '../styles/global.css';

export default function IndexPage() {
  return (
    <section className="w-full h-screen">
      <div className="flex w-full h-1/3">
        <button className="flex-1 h-full p-8 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300">Thing 1</button>
        <button className="flex-1 h-full p-8 bg-red-300 hover:text-red-300 hover:bg-green-200 transition-all duration-300">Thing 2</button>
        <button className="flex-1 h-full p-8 bg-blue-400 hover:text-blue-400 hover:bg-yellow-300 transition-all duration-300">Thing 3</button>
      </div>
      <div className="flex w-full h-1/3">
        <button className="flex-1 h-full p-8 bg-indigo-800 hover:text-indigo-800 hover:bg-pink-500 transition-all duration-300">Thing 4</button>
        <button className="flex-1 h-full p-8 bg-green-500 hover:text-green-500 hover:bg-blue-700 transition-all duration-300">Thing 5</button>
        <button className="flex-1 h-full p-8 bg-pink-500 hover:text-yellow-500 hover:bg-red-700 transition-all duration-300">Thing 6</button>
      </div>
      <div className="flex w-full h-1/3">
        <button className="flex-1 h-full p-8 bg-blue-200 hover:bg-white hover:text-blue-400 transition-all duration-300">Thing 7</button>
        <button className="flex-1 h-full p-8 bg-red-800 hover:text-green-300 hover:bg-black transition-all duration-300">Thing 8</button>
        <button className="flex-1 h-full p-8 bg-yellow-100 hover:text-blue-400 hover:bg-yellow-300 transition-all duration-300">Thing 9</button>
      </div>
    </section>
  );
}
