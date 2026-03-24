import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Processes from "../components/Processes.jsx";
import Experience from "../components/Experience.jsx";

const Home = () => {
  return (
    <div className="pt-20">
      <Navbar />
        {/* <div className="flex items-center justify-between w-full px-6">
          <div className="bg-amber-400 h-40 w-40"></div>
          <div className="bg-blue-500 h-40 w-40"></div>
          <div className="bg-slate-500 h-40 w-40"></div>
        </div> */}
      <Experience/>
      <Processes/>
      <Footer />
    </div>
  );
};

export default Home;
