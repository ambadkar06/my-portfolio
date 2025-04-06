"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const experiences = [
    {
      title: "Software Engineer · Eventeny",
      period: "Aug 2024 — Feb 2025",
      link: "https://www.eventeny.com",
      bullets: [
        "Deployed Apache Kafka to support real-time communication between distributed microservices, powering an event-driven system used by 8,700+ organizers.",
        "Refactored SQL and MongoDB queries to improve dashboard responsiveness and cut load time by 41%.",
        "Streamlined backend logic using OOP and RESTful APIs in PHP and JavaScript, reducing code redundancy by 22%.",
        "Built Jenkins-based CI/CD pipelines and validated APIs via Postman, cutting release time by 47%.",
        "Redesigned dashboard UI logic with design teams, leading to a 17% increase in organizer satisfaction.",
      ],
      skills: ["PHP", "JavaScript", "Apache Kafka", "Jenkins", "RESTful APIs", "SQL", "MongoDB", "OOP", "CI/CD", "Postman", "JIRA"],
    },
    {
      title: "Software Engineer Intern · Volvo Group",
      period: "Jan 2024 — May 2024",
      link: "https://www.volvogroup.com/en/",
      bullets: [
        "Built React.js + TypeScript components for real-time diagnostics of 2,650+ fleet vehicles, reducing error rates by 31%.",
        "Improved test coverage from 62% to 88% using PyTest and JUnit for backend validation.",
        "Optimized backend telemetry processing using Python, SQL, and Azure Data Factory, cutting data lag by 36%.",
        "Handled concurrent sensor streams with Java multithreading via ExecutorService.",
      ],
      skills: ["Java", "Power Automate", "Tableau", "Python", "SQL", "Apache Kafka", "Azure Data Factory", "Multithreading"],
    },
    {
      title: "IT Intern · Discount Tire",
      period: "May 2023 — Aug 2023",
      link: "https://www.discounttire.com/",
      bullets: [
        "Set up CI/CD pipelines using GitHub Actions and Azure DevOps, reducing manual errors by 44%.",
        "Implemented Prometheus & Grafana for monitoring, improving incident response by 34%.",
        "Built microservices in Java and Python for appointment scheduling and sensor data.",
        "Resolved Git conflicts, reducing integration issues by 17%.",
      ],
      skills: ["Java", "Python", "GitHub Actions", "CI/CD", "Microservices", "Git", "Power Automate", "Agile Development"],
    },
    {
      title: "Full Stack Engineer · Verzeo",
      period: "Jul 2020 — Jun 2022",
      link: "https://learn.verzeo.in/",
      bullets: [
        "Built ETL pipelines in Python & SQL to automate marketing reports, saving 48% manual effort.",
        "Migrated legacy PHP modules to Node.js, improving response times by 23%.",
        "Created responsive React.js components, increasing engagement by 26%.",
        "Improved data sync with REST APIs and reduced deployment time using WordPress and Drupal.",
      ],
      skills: ["Python", "SQL", "React.js", "REST APIs", "ETL", "WordPress", "Drupal", "Git", "Agile", "Full Stack Development"],
    },
  ];

  return (
    <div className={`${darkMode ? "bg-[#0a192f] text-white" : "bg-white text-black"} min-h-screen p-10 transition-all`}>
      <div className="flex justify-center">
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-md transition ${darkMode ? "bg-gray-800 text-white" : "bg-gray-600 text-black"}`}>
          {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
      </div>

      <h1 className="text-4xl font-bold mt-4">My Experience</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        My hands-on journey building scalable software solutions, refining backend logic, and driving team efficiency.
      </p>

      <div className="mt-10 space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`bg-[#112240] text-gray-200 p-6 rounded-lg shadow-lg ${
              darkMode
                ? "hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                : "hover:shadow-[0_0_15px_rgba(0,0,0,1)]"
            } transition-all duration-300`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400">{exp.period}</p>
            <Link href={exp.link} target="_blank" rel="noopener noreferrer">
              <h2 className="text-2xl font-semibold text-blue-400 hover:underline">{exp.title} ↗</h2>
            </Link>
            <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-300">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
