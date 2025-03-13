"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<{ id: number; left: number; top: number; duration: number; delay: number }[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const navTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const elements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setAnimatedElements(elements);
  }, []);

  // Function to show navigation menu
  const handleNavEnter = () => {
    clearTimeout(navTimeoutRef.current);
    setShowNavigation(true);
  };

  // Function to hide navigation menu after 4 seconds
  const handleNavLeave = () => {
    navTimeoutRef.current = setTimeout(() => setShowNavigation(false), 2000);
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
      console.log("📩 API Response:", data);  
  
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus(" Failed to send message. Check logs.");
      }
    } catch (error) {
      console.error("⚠️ Error sending message:", error);
      setStatus(" Error sending message. Check console.");
    }
  };
  
  
  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all duration-500`}>
      {/* Animated Coding Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`absolute inset-0 w-full h-full ${darkMode ? "bg-black" : "bg-white"}`}
        >
          {animatedElements.map((element) => (
            <motion.span
              key={element.id}
              className={`absolute text-xs font-mono ${darkMode ? "text-green-400" : "text-gray-600"}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: [0, 1000], opacity: [1, 0] }}
              transition={{ duration: element.duration, repeat: Infinity, delay: element.delay }}
              style={{
                left: `${element.left}vw`,
                top: `${element.top}vh`,
              }}
            >
              {"<code/>"}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between p-6 items-center w-full mx-auto relative " style = {{maxWidth: "14rem"}}>
        {/* Navigation Dropdown */}
        <div className="relative" onMouseEnter={handleNavEnter} onMouseLeave={handleNavLeave}>
          <button className={`px-4 py-2 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} rounded-md transition`}>Navigation</button>
          {showNavigation && (
            <div 
              className="absolute left-0 mt-2 bg-gray-900 p-4 rounded-lg shadow-lg w-48 z-50" 
              style={{ pointerEvents: "auto" }} //  Ensure it can be clicked
              onMouseEnter={handleNavEnter} 
              onMouseLeave={handleNavLeave}
            >
              {/*  Wrap each Link inside a div to prevent event conflicts */}
              <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                <Link href="/experience">
                  Experience
                </Link>
              </div>
              <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                <Link href="/projects">
                  Projects
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-md transition ${darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}
        >
          {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio! 🎉
      </motion.h1>

      <p className="text-lg mt-4">
        Hi, I'm <span className="font-semibold text-blue-600">Sakshi Ambadkar</span>, a passionate Software Engineer.
      </p>

      <p className="mt-2 text-red-400 text-lg">
  Crafting scalable applications, solving complex problems, and optimizing performance.
</p>

       {/* Journey into Tech */}
       <motion.p 
  className={`mt-4 text-lg max-w-2xl leading-relaxed transition-all duration-300 
              ${darkMode ? "text-gray-300" : "text-black"}`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  My journey into tech started with 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> curiosity</strong>—breaking things apart just to 
  understand how they worked. From tinkering with 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> electronics</strong> and 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> coding small scripts</strong> to developing 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> scalable applications</strong>, 
  I've been fascinated by problem-solving and innovation. Today, I build 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> robust</strong> and 
  <strong className={`${darkMode ? "text-white" : "text-black"}`}> efficient</strong> software solutions, 
  merging creativity with logic.
</motion.p>

      <div className="mt-5 flex space-x-4">
        <a 
          href="https://github.com/ambadkar06" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" hover:text-gray-700"
        >
          <FaGithub size={36} />
        </a>
        <a 
          href="https://www.linkedin.com/in/sakshi-ambadkar/" 
          target="_blank" 
          rel="noopener noreferrer"
          className=" hover:text-blue-500"
        >
          <FaLinkedin size={36} />
        </a>
      </div>
      <div className="mt-6 space-x-4">
  <motion.button 
    className={`px-6 py-3 rounded-lg shadow-md transition ${darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"}`}
    whileHover={{ scale: 1.05 }}
  >
    Download CV
  </motion.button>

  <motion.button 
    onClick={() => setShowContactForm(true)} 
    className={`px-6 py-3 rounded-lg shadow-md transition ${darkMode ? "bg-gray-800 text-white" : "bg-gray-400 text-black"}`}
    whileHover={{ scale: 1.05 }}
  >
    Contact Me
  </motion.button>
</div>
</main>

{/* Contact Form Modal */}
{showContactForm && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#112240] dark:text-white text-black p-6 rounded-lg shadow-lg w-96 relative"
    >
      {/* Close Button */}
      <button
        onClick={() => setShowContactForm(false)}
        className="absolute top-2 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
      >
        ✖
      </button>

      <h2 className="text-xl font-bold mb-4 text-center">Contact Me</h2>
      
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required 
          value={formData.name} onChange={handleChange} 
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-400"/>
        
        <input type="email" name="email" placeholder="Your Email" required 
          value={formData.email} onChange={handleChange} 
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-400"/>
        
        <textarea name="message" placeholder="Your Message" required rows="4" 
          value={formData.message} onChange={handleChange} 
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-400"/>
        
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition-all duration-200">
          Send Message
        </button>
        
        {status && <p className="text-center mt-2 text-sm">{status}</p>}
      </form>
    </motion.div>
  </div>
)}

    </div>
  );
}
