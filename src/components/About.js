import React from "react";
import "./Main.css"; // External custom styles

const About = () => {
  return (
    <section id="about" className="about-section py-5" data-aos="fade-up">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
        </div>

        {/* Description */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <p className="about-text text-center">
              I'm <strong>Saurabh Kushwah</strong>, a self-taught full-stack developer passionate about building web applications using the <strong>MERN stack</strong>. I enjoy learning new technologies and solving real-world problems through clean, functional code.
              <br /><br />
              I have hands-on experience in both frontend and backend development. Currently, I'm sharpening my skills in <strong>React</strong>, <strong>MongoDB</strong>, and <strong>JavaScript</strong>.
            </p>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="about-card text-center p-4 h-100">
              <h5 className="card-title">Frontend</h5>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card text-center p-4 h-100">
              <h5 className="card-title">Backend</h5>
              <p>Node.js, Express.js, MongoDB</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card text-center p-4 h-100">
              <h5 className="card-title">Tools</h5>
              <p>Git, GitHub, Postman, VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
