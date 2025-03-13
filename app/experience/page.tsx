"use client"; // Important for Next.js if using client components
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";



export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference (Optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-[#0a192f] text-white" : "bg-white text-black"} min-h-screen p-10 transition-all`}>
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-center">
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-md transition ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-600 text-black"
          }`}
        >
          {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </div>
      <h1 className={`${darkMode ? "text-gray-200" : "text-black"} text-4xl font-bold mt-4`}>My Experience</h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-700"} mt-4`}>
        A journey through my roles in software engineering, where I build scalable web applications, optimize backend 
        workflows, and create seamless user experiences.
      </p>

      <div className="mt-10 space-y-6">
        {/* Eventeny */}
        <motion.div 
         className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
          ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
          transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400">Aug 2024 — Present</p>
          <Link href="https://www.eventeny.com" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-semibold text-blue-400 hover:underline">
              Software Engineer · Eventeny ↗
            </h2>
          </Link>
          <p className="mt-2 text-gray-300">
            Working on CI/CD automation, RESTful API development, and database optimization to enhance 
            event management solutions. Implemented real-time dashboards for event organizers, improving engagement 
            and operational efficiency.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>JavaScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>React</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>PHP</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>MySQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>AJAX</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>GIT</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Docker</span>
          </div>
        </motion.div>

        {/* Volvo Group */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400">Jan 2024 — May 2024</p>
          <Link href="https://www.volvogroup.com/en/" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400 hover:underline">Software Engineer Intern · Volvo Group ↗</h2></Link>
          <p className="mt-2 text-gray-300">
            Focused on PostgreSQL optimization, fleet management dashboards, and data automation.Migrated 
            VBA scripts to Python, improving warehouse efficiency.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>PostgreSQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Power BI</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>.NET Core</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Power Automate</span>
          </div>
        </motion.div>

        {/* Discount Tire */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400">May 2023 — Aug 2023</p>
          <Link href="https://www.discounttire.com/" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400 hover:underline">IT Intern · Discount Tire ↗</h2></Link>
          <p className="mt-2 text-gray-300">
            Improved MongoDB query performance, developed ETL pipelines, and enhanced sensor data compression, 
            saving $15,000 annually in cloud costs.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>MongoDB</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Python</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>ETL</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Agile</span>
          </div>
        </motion.div>

        {/* Verzeo */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
         
        >
          <p className="text-gray-400">Jul 2020 — Jun 2022</p>
          <Link href=" https://learn.verzeo.in/" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400 hover:underline">Full Stack Engineer · Verzeo ↗</h2></Link>
          <p className="mt-2 text-gray-300">
            Built React.js frontends, optimized Node.js APIs, and improved database performance to handle a 
            38% traffic increase.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>React</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>PostgreSQL</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Express JS</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm"style={{ color: "lightgrey" }}>Unit Testing</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
