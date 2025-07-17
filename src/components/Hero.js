import React from "react";
import "./Main.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section text-white py-5 mt-5" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Text Section */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-6">
              Hi, I'm <span className="gradient-text">Saurabh Kushwah</span>
            </h1>
            <h2 className="fs-4 text-light">MERN Stack Developer</h2>
            <p className=" mt-3 text-light">
              Passionate about building web apps that solve real problems.
              Learning React, Node, MongoDB and diving deep into MERN stack development.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning fw-semibold px-4 py-2 mt-3"
            >
              View Resume
            </a>

          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/my-6.jpg`}
              alt="Saurabh Kushwah"
              className="rounded-circle shadow-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
