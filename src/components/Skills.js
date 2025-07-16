import React from "react";
import "./Main.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5" data-aos="fade-up">
      <div className="container">
        {/* Title */}
        <div className=" text-center mb-4">
          <h2 className="skills-title">
            My <span className="highlight">Skills</span>
          </h2>
        </div>

        {/* Skill Boxes */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="skill-card p-4 h-100 ">
              <h4 className=" mb-3 card-title">Frontend</h4>
              <ul className="list-unstyled">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill-card p-4 h-100 ">
              <h4 className=" mb-3 card-title">Backend</h4>
              <ul className="list-unstyled">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill-card p-4 h-100 ">
              <h4 className=" mb-3 card-title">Tools & Other</h4>
              <ul className="list-unstyled">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>MongoDB Compass</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
