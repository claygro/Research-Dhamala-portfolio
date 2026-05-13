import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xl">Hi I am</h4>
          <h1 className="text-5xl md:text-6xl font-bold">Your Name</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold text-orange-500">
            Software Developer
          </h2>

          <div className="flex space-x-4 pt-4">
            <FaInstagram className="cursor-pointer hover:text-orange-500 transition-colors" />
            <FaLinkedin className="cursor-pointer hover:text-orange-500 transition-colors" />
            <FaGithub className="cursor-pointer hover:text-orange-500 transition-colors" />
            <FaFacebook className="cursor-pointer hover:text-orange-500 transition-colors" />
          </div>

          <div className="flex space-x-4 pt-6">
            <button className="bg-orange-600 px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition-all">
              Hire Me
            </button>
            <button className="border border-gray-600 px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-all">
              Download CV
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-800">
            <div>
              <p className="text-orange-500 text-2xl font-bold">5+</p>
              <p className="text-gray-400 text-sm">Experience</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">20+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-orange-500 text-2xl font-bold">80+</p>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-[#1a1a1a] rounded-full overflow-hidden border-4 border-gray-800 flex items-end">
            {/* Replace with your photo */}
            <div className="w-full h-full bg-gradient-to-t from-orange-500/20 to-transparent flex items-center justify-center text-gray-700 italic">
              [Photo Placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
