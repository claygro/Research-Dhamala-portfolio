import React from "react";
import photo from "../assets/aboutPhoto.jpeg";
import html from "../assets/html.png";
import css from "../assets/css.svg";
import js from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import docker from "../assets/docker.png";
import reactjs from "../assets/reactjs.png";
const About = () => {
  const technology = [
    {
      name: "Html",
      img: html,
    },
    {
      name: "Css",
      img: css,
    },
    {
      name: "Javascript",
      img: js,
    },
    {
      name: "React js",
      img: reactjs,
    },
    {
      name: "Node js",
      img: nodejs,
    },
    {
      name: "Mongodb",
      img: mongodb,
    },
    {
      name: "Docker",
      img: docker,
    },
  ];
  return (
    <>
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto bg-[#111111]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Decorative Image/Box */}
          <div className="relative">
            <div className="w-full h-[500px]  bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
              <span className="text-gray-700 italic">
                <img
                  src={photo}
                  alt="Research Dhamala"
                  className="w-full h-auto object-cover"
                />
              </span>
            </div>
            {/* Accent square common in modern designs */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-600 -z-10 rounded-lg"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold border-l-4 border-orange-500 pl-4">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Hi, I’m Research Dhamala, a passionate Software Engineer from
              Nepal with a strong interest in modern web development and
              creating user-focused digital experiences. I completed my +2
              education in 2026 from Orchid Science and Management College.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I specialize in building responsive and interactive web
              applications using technologies like React.js, JavaScript,
              Tailwind CSS, Node js, Mongodb, Docker. I enjoy transforming ideas
              into clean, functional, and visually appealing products while
              continuously learning new technologies and improving my skills as
              a developer.
            </p>
          </div>
        </div>
      </section>
      <h1 className="text-white font-bold text-4xl text-center">
        Technologies I used
      </h1>
      {/* Technologies */}
      <div className="flex flex-wrap justify-center gap-6 pt-8">
        {technology.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center bg-gray-900 border border-gray-800 rounded-2xl px-6 py-5 w-32 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="w-14 h-14 object-contain mb-3"
            />

            <h1 className="text-gray-300 text-sm font-medium text-center">
              {tech.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
