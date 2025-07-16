import React from "react";
import "./Main.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section text-center text-white py-4 mt-5">
      <div className="container">
        {/* Footer Text */}
        <p className="mb-0 small">
          © {currentYear} <strong>Saurabh Kushwah</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
