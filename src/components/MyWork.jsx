// components/MyWork.js
const projects = [
  {
    projectName: "Jarvis",
    description:
      "An AI-powered assistant that enables users to ask questions, generate code, and automate browser-based tasks like opening websites such as YouTube and Facebook. For now I only implement open youtube and facebook",
    technology: [
      "React js",
      "Node js",
      "Express",
      "Mongodb",
      "deepseek api from open-router",
    ],
    github: "https://github.com/claygro/jarvis",
  },
  {
    projectName: "Role jet",
    description:
      "A full-stack job portal built during a hackathon that enables companies to post job opportunities and allows users to apply by submitting their resume and personal details, including name, email, and phone number, through a centralized platform",
    technology: ["React js", "Node js", "Express", "Mongodb"],
    github: "https://github.com/claygro/rolejet",
  },
  {
    projectName: "File drive",
    description:
      "A full-stack cloud file management platform inspired by Google Drive that enables users to upload and securely store files up to 50MB. Users can share files in public or restricted mode and set expiration times to control access, ensuring files automatically become inaccessible after the defined period.",
    technology: ["React js", "Node js", "Express", "Mongodb", "cloudinary"],
    github: "https://github.com/claygro/file-sharing-web-app",
  },
  {
    projectName: "GuffSuff",
    description:
      "A real-time chat application that allows users to send and accept friend requests and communicate instantly with their friends.",
    technology: ["React js", "Node js", "Express", "Mongodb", "socket.io"],
    github: "https://github.com/claygro/guffsuff",
  },
  {
    projectName: "Blogging",
    description:
      "A blog platform where you can write blog, edit it, upload it, comment it, like it.",
    technology: ["React js", "Node js", "Express", "Mongodb"],
    github: "https://github.com/claygro/Blogging",
  },
  {
    projectName: "Share",
    description:
      "A post sharing webapp where you can share your thought, post, edit it, delete it",
    technology: ["React js", "Node js", "Express", "Mongodb"],
    github: "https://github.com/claygro/share",
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
          className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-orange-500/10"
        >
          <div className="p-6 flex flex-col h-full">
            {/* Title */}
            <h3 className="text-xl font-bold text-orange-500">
              {proj.projectName}
            </h3>

            {/* Description */}
            <h1 className="text-sm uppercase tracking-wider text-gray-500 mt-4">
              Description
            </h1>
            <p className="text-gray-400 mt-2 leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Stack */}
            <h1 className="text-sm uppercase tracking-wider text-gray-500 mt-5">
              Technology
            </h1>

            <ol className="list-decimal list-inside text-gray-300 mt-2 space-y-1">
              {proj.technology.map((tech, index) => (
                <li key={index} className="hover:text-orange-400 transition">
                  {tech}
                </li>
              ))}
            </ol>

            {/* GitHub Link */}
            <a
              href={proj.github}
              target="_blank"
              className="mt-auto inline-block pt-5 text-sm font-semibold text-orange-400 hover:text-orange-300 underline underline-offset-4"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MyWork;
