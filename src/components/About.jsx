import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto bg-[#111111]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Decorative Image/Box */}
        <div className="relative">
          <div className="w-full h-96 bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center">
            <span className="text-gray-700 italic">
              About Me Image Placeholder
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="pt-4">
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
