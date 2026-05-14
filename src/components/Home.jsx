import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/myPhoto.jpeg";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <h4 className="text-gray-400 text-xl">Hi I am</h4>
          <h1 className="text-5xl md:text-6xl font-bold">Research Dhamala</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold text-orange-500">
            Software Engineer
          </h2>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/research-dhamala-448b27398/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer w-7 h-auto hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://github.com/claygro" target="_blank">
              <FaGithub className="cursor-pointer w-7 h-auto hover:text-orange-500 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/research_dhamala/"
              target="_blank"
            >
              <FaInstagram className="cursor-pointer w-7 h-auto hover:text-orange-500 transition-colors" />
            </a>
          </div>

          <div className="flex space-x-4 pt-6">
            <button className="bg-orange-600 px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition-all">
              <a
                href="https://www.linkedin.com/in/research-dhamala-448b27398/"
                target="_blank"
              >
                Let's connect on linkedin
              </a>
            </button>
            <a href="/ResearchDhamala-resume.pdf" download>
              <button className="border border-gray-600 px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-all">
                Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-80 h-80 md:w-[450px] md:h-[450px] bg-[#1a1a1a] rounded-full overflow-hidden border-4 border-gray-800 flex items-end">
            <div className="w-full h-full bg-gradient-to-t from-orange-500/20 to-transparent flex items-center justify-center text-gray-700 italic">
              <img src={myPhoto} alt="My photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
