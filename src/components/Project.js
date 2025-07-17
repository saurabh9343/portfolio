import React from "react";
import "./Main.css";

const Projects = () => {
  const projectData = [
    {
      title: "Car Rental Website",
      description:
        "Full-stack MERN car rental app with login, JWT auth, admin car management, and vehicle owner dashboard.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/saurabh9343/Car-rentel",
      demo: "https://lucky-cannoli-b72f93.netlify.app",
    },
    {
      title: "Basic Html Project",
      description:
        "This is a basic front-end web application for an online T-shirt selling store, built using HTML and CSS.",
      tech: "Html and Css",
      github: "https://github.com/saurabh9343/html",
      demo: "https://htmlwebapp.netlify.app/home",
    },
    {
      title: "Percentage Calculator",
      description:
        "This is a simple web-based application designed to help students calculate their total percentage based on the marks obtained in different subjects in Class 10th.",
      tech: "Html, Css and Javascript.",
      github: "https://github.com/saurabh9343/CalCulate-10th-result",
      demo: "https://calculater-10th-percentage.netlify.app",
    },
  ];

  return (
    <section className="projects-section py-5" id="projects" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center projects-title mb-5">
          My <span className="highlight">Projects</span>
        </h2>

        <div className="row g-4">
          {projectData.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card project-card h-100 p-3">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{project.title}</h5>
                  <p className="card-text small flex-grow-1">{project.description}</p>
                  <p className="tech-used small mb-3">
                    <strong>Tech:</strong> {project.tech}
                  </p>
                  <div className="d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm w-50"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-warning btn-sm w-50"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
