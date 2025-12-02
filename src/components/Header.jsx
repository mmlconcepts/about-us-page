import React from "react";
import "./Header.css";

const Header = () => {
  const text = "MML Concepts";

  return (
    <header className="header">
      <h1 className="logo-text">
        {text.split("").map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
      </h1>
    </header>
  );
};

export default Header;
