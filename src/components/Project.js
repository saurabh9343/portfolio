import React from "react";
import "./Main.css";

const Projects = () => {
  const projectData = [
    {
      title: "Car Rental Website",
      description:
        "Full-stack MERN car rental app with login, JWT auth, admin car management, and vehicle owner dashboard.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/aashish/car-rental",
      demo: "https://car-rental-demo.vercel.app",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application with socket.io, group & private chat, and responsive UI.",
      tech: "React, Node.js, Socket.io, MongoDB",
      github: "https://github.com/aashish/chat-app",
      demo: "https://chat-app-demo.vercel.app",
    },
    {
      title: "Expense Tracker",
      description:
        "Track your daily expenses, see chart insights, and manage your budget easily.",
      tech: "React, Node.js, MongoDB, Chart.js",
      github: "https://github.com/aashish/expense-tracker",
      demo: "https://expense-tracker-demo.vercel.app",
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
