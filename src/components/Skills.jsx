import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaBootstrap, 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJsSquare />, level: "80%" },
    { name: "React", icon: <FaReact />, level: "80%" },
    { name: "Node.js", icon: <FaNodeJs />, level: "75%" },
    { name: "Express.js", icon: <SiExpress />, level: "70%" },
    { name: "MongoDB", icon: <SiMongodb />, level: "70%" },
    { name: "SQL", icon: <FaDatabase />, level: "75%" },
    { name: "Python", icon: <FaPython />, level: "75%" },
    { name: "Web Development", icon: <FaLaptopCode />, level: "85%" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "80%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "80%" }, 
  ];

  const softSkills = [
    "🤝 Teamwork & Collaboration",
    "🗣️ Communication Skills",
    "🧩 Problem Solving",
    "⚡ Adaptability",
    "🎯 Leadership",
    "⏳ Time Management",
    "💡 Creativity & Innovation",
  ];

  return (
    <section className="skills-container" id="skills">
      <div className="skills-content container">
        <h2 className="skills-title text-center">MY SKILLS</h2>
        <p className="skills-paragraph" >
          I have a balance of <span className="highlight">Technical</span> and{" "}
          <span className="highlight">Soft Skills</span> that help me build
          efficient, scalable applications while working effectively in teams.
        </p>

        <div className="row">
          {/* Technical Skills */}
          <div className="col-12 col-lg-6">
            <div className="skills-box" data-aos="fade-right">
              <h3 className="skills-subtitle">TECHNICAL SKILLS</h3>
              <div className="row">
                {technicalSkills.map((skill, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <div className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <p>{skill.name}</p>
                      <div className="skill-hover">
                        <span>{skill.level}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-12 col-lg-6">
            <div className="skills-box" data-aos="fade-left">
              <h3 className="skills-subtitle">SOFT SKILLS</h3>
              <ul className="soft-skills-list">
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
