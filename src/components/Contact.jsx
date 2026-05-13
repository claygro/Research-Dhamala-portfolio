import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Get In Touch</h2>
        <p className="text-gray-400 mt-4">
          Have a project in mind? Let's build something great.
        </p>
      </div>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 focus:border-orange-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 focus:border-orange-500 outline-none"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 focus:border-orange-500 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Project Description"
          className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 focus:border-orange-500 outline-none"
        ></textarea>
        <button className="w-full bg-orange-600 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
