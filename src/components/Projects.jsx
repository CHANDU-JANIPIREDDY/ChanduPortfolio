import React from "react";
import "../App.css"; 


function Projects() {
  const projectList = [
    {
      title: "E-COMMERCE STORE",
      description: "Full-stack e-commerce site with admin panel and AI voice assistant.",
      image: "https://res.cloudinary.com/dymntfrwl/image/upload/v1757227127/WhatsApp_Image_2025-09-07_at_12.07.04_PM_b6tutz.jpg",
      demo: "https://cs-online-store-frontend.onrender.com",
      github: "https://github.com/CHANDU-JANIPIREDDY/CS_ONLINE_STORE",
    },
    {
      title: "GEMINI CLONE",
      description: "Gemini clone with React and gemini API integration.",
      image: "https://res.cloudinary.com/dymntfrwl/image/upload/v1757227137/WhatsApp_Image_2025-09-07_at_12.07.04_PM_2_x2qiuy.jpg",
      demo: "https://react-gemini-clone-ruddy.vercel.app/",
      github: "https://github.com/CHANDU-JANIPIREDDY/React_Gemini_Clone",
    },
    {
      title: "COLLEGE WEBSITE",
      description: "college website with HTML, CSS, JS, and Bootstrap.",
      image: "https://res.cloudinary.com/dymntfrwl/image/upload/v1757227120/WhatsApp_Image_2025-09-07_at_12.07.04_PM_1_oukzq4.jpg",
      demo: "https://chandu103.netlify.app/",
      github: "https://github.com/CHANDU-JANIPIREDDY/Sasi_College_Website_Clone",
    },
    {
      title: "PORTFOLIO WEBSITE",
      description: "Portfolio website to showcase projects and skills.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFM99mzXTo3zw/feedshare-shrink_2048_1536/B56ZP.dgK.GQAo-/0/1735140967826?e=1759968000&v=beta&t=wMRV0UdAkCYmjxLj2FHLtj1y7tt7OiwYK-DWPDePdbY",
      demo: "https://my-portfolio-73puzo5g4-chandus-projects-de4e27eb.vercel.app/",
      github: "https://github.com/CHANDU-JANIPIREDDY/MyPortfolio",
    },
    {
      title: "UI/UX DESIGNS",
      description: "UI/UX designs for web and mobile applications.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGuKA476Be_bA/feedshare-shrink_800/B56ZPVPmgHHIAo-/0/1734449459372?e=1759968000&v=beta&t=Fe-OzSGtQ8VVmZk1YPwN8SaouWaEJD7AV7ugb2fu1jw",
      demo: "https://drive.google.com/file/d/1E6tCXW3hTyzf9P9JygPFhmO8toueA7aS/view",
      github: "",
    },
    {
      title: "WIKIPEDIA SEARCH",
      description: "A simple Wikipedia search engine clone with a clean UI and real-time results.",
      image: "https://www.reputationsciences.com/wp-content/uploads/2023/11/Screenshot-2025-03-30-at-6.58.18%E2%80%AFPM.png",
      demo: "https://chandu103.ccbp.tech/",
      github: "https://github.com/CHANDU-JANIPIREDDY/MyPortfolio.git",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-heading">MY PROJECTS</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
