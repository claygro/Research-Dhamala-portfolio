import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Event from "./components/Event";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#111111] text-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Home />
        <About />
        <MyWork />
        <Event />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
