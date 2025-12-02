import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaYoutube />, url: "https://www.youtube.com/@mml.concepts", color: "#FF0000" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/mml.concepts?igsh=MTRyMWlpczBkbDJ1eg==", color: "#E4405F" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/mml-concept/", color: "#0A66C2" },
  ];

  return (
    <footer className="footer-sticky">
      <div className="footer-content">
        <span className="footer-text">
          © {currentYear} MML Concepts. All rights reserved.
        </span>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--hover-color": link.color }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
