import React from "react";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaGlobe,
  FaTasks,
  FaUsers,
  FaAddressCard,
} from "react-icons/fa";
import "./MainLinks.css";

const MainLinks = () => {
  const links = [
    { icon: <FaCogs />, text: "Projects", url: "/projects", internal: true },
    {
      icon: <FaGlobe />,
      text: "Website",
      url: "https://www.mmlconcepts.com",
      internal: false,
      targetSelf: true,
    },
    { icon: <FaTasks />, text: "Services", url: "/services", internal: true },
    { icon: <FaUsers />, text: "Members", url: "/members", internal: true },
    {
      icon: <FaAddressCard />,
      text: "Leave a Message",
      url: "https://docs.google.com/spreadsheets/d/1NiB1vKoQAUbPIDREdL1A4YpsXZpobmYPsG3PpkH2e6Y/edit?usp=sharing",
      internal: false,
    },
  ];

  return (
    <div className="background-overlay">
      <main className="linktree-container">
        <div className="linktree-links">
          {links.map((link, index) =>
            link.internal ? (
              <Link
                key={index}
                to={link.url}
                className="linktree-button"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.icon} <span>{link.text}</span>
              </Link>
            ) : (
              <a
                key={index}
                href={link.url}
                target={link.targetSelf ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="linktree-button"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.icon} <span>{link.text}</span>
              </a>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MainLinks;
