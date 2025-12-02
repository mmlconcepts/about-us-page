import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Members.css";

const Members = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    fetch('/members.json')
      .then(res => res.json())
      .then(data => setMembersData(data))
      .catch(err => console.error('Error loading members data:', err));
  }, []);

  return (
    <div className="members-page">
      <h2 className="members-title">Our Team</h2>

      <div className="members-grid">
        {membersData.map((m, i) => (
          <div key={i} className="member-card">
            <div className="member-card-inner">
              <div className="member-card-front">
                <div className="circle-img-wrapper">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="circle-img"
                    onError={(e) => (e.target.src = "/default-profile.png")}
                  />
                </div>
                <div className="info-card">
                  <h3>{m.name}</h3>
                  <p>{m.designation}</p>
                </div>
              </div>
              <div className="member-card-back" style={{ backgroundImage: `url('${m.img}')` }}>
                <h3>{m.name}</h3>
                <p className="hover-role">{m.designation}</p>
                <p className="hover-desc">{m.desc}</p>
                <div className="hover-icons">
                  {m.socials.linkedin && (
                    <a
                      href={m.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {m.socials.twitter && (
                    <a
                      href={m.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {m.socials.instagram && (
                    <a
                      href={m.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
