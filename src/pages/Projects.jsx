import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCards";
import projects from "../../projects.js";

const Projects = () => {
  return (
    <div>
      <Navbar />

      <section className="px-10 py-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Projects
        </h1>
        <p className="text-gray-600 mb-10">
          A selection of my recent work and personal builds.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FlashCard key={index} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;