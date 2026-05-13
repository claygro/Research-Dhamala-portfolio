// components/MyWork.js
const projects = [
  {
    projectName: "GuffSuff",
    description: "Real-time MERN chat app",
    image: "https://via.placeholder.com/400",
    github: "#",
  },
  {
    projectName: "Track-it",
    description: "GPS tracking dashboard",
    image: "https://via.placeholder.com/400",
    github: "#",
  },
];

const MyWork = () => (
  <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 border-l-4 border-orange-500 pl-4">
      My Work
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((proj, i) => (
        <div
          key={i}
          className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
        >
          <img
            src={proj.image}
            alt={proj.projectName}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-orange-500">
              {proj.projectName}
            </h3>
            <p className="text-gray-400 mt-2">{proj.description}</p>
            <a
              href={proj.github}
              className="inline-block mt-4 text-sm font-semibold underline hover:text-orange-400"
            >
              View on Github
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MyWork;
