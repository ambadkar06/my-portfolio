"use client"; // Ensures this runs on the client side

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist dark mode preference
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
            darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </div>

      {/* Page Title */}
      <h1 className={`${darkMode ? "text-gray-200" : "text-black"} text-4xl font-bold mt-4`}>
        My Projects
      </h1>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-700"} mt-4`}>
        Here are some of my personal and professional projects, covering full-stack development, database design, and scalable backend systems.
      </p>

      <div className="mt-10 space-y-6">
        {/* IEEE Publication */}
        <motion.div 
           className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://ieeexplore.ieee.org/document/9753526" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-semibold text-blue-400 hover:underline">
             IOT - Enabled Smart Shoes for Blind People ↗
            </h2>
          </Link>
          <p className="mt-2">
            Published research on Internet Of Things-Enabled Smart Shoe for the Blind, an innovative assistive technology solution designed to enhance mobility and independence for visually impaired individuals.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              IOT
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Embedded Systems
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Sensor Technology
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Assistive Technology
            </span>
          </div>
        </motion.div>
        {/* Bank Loans Backend */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://github.com/ambadkar06/Bank-Loans-Backend" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400">
            Bank Loans Backend ↗
          </h2>
          </Link>
          <p className="mt-2">
            A Node.js backend powered by MongoDB Atlas and Prisma ORM for managing bank loan data. Features include secure API endpoints and scalable database architecture.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Node.js
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              MongoDB
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Prisma
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              JavaScript
            </span>
          </div>
        </motion.div>

        {/* Bank Loans UI */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://github.com/ambadkar06/Bank-Loans-UI" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400">
            Bank Loans UI ↗
          </h2>
          </Link>
          <p className="mt-2">
            A React.js frontend that connects to the Bank Loans backend, providing a dynamic user experience with real-time CRUD operations.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              React.js
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              JavaScript
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              HTML
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              CSS
            </span>
          </div>
        </motion.div>

        {/* Music Records Database Design */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://github.com/ambadkar06/Music-Records-Database-Design" target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-blue-400">
            Music Records Database Design ↗
          </h2>
          </Link>
          <p className="mt-2">
            A hybrid relational-NoSQL database using SQL Server & Couchbase, designed with triggers, stored procedures, and scalable schema management.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              SQL Server
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Couchbase
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Triggers
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              Stored Procedures
            </span>
          </div>
        </motion.div>
        {/* Foodventeny */}
        <motion.div 
          className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg 
            ${darkMode ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"} 
            transition-all duration-300`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://github.com/ambadkar06/Foodventeny" target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl font-semibold text-blue-400 hover:underline">
              Foodventeny ↗
            </h2>
          </Link>
          <p className="mt-2">
            A full-stack food ordering system designed for event-based food management, integrating React.js, Express.js, and MongoDB to provide seamless user interactions and order tracking.
          </p><div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              SQL Server
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              PHP
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              JavaScript
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              HTML
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm" style={{ color: "lightgrey" }}>
              CSS
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
