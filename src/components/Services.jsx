import React from "react";
import "./Services.css";

const services = [
  {
    title: "Creative Graphic Design",
    details: [
      "Custom Posters",
      "Engaging Carousels",
      "Eye-catching Individual Thumbnails",
    ],
  },
  {
    title: "Video Editing & Production",
    details: [
      "Reels with professional voiceover integration",
      "Basic to intermediate video editing (motion graphics, transitions, trimming, sync)",
      "Story-based short-form content for Instagram & other platforms",
    ],
  },
  {
    title: "Social Media Creative Content",
    details: [
      "60 Story creatives (2 per day)",
      "Daily story design, scheduling & alignment with content strategy",
    ],
  },
  {
    title: "Full Content Management",
    details: [
      "Planning and coordination for all 20 creatives",
      "Timely reviews, client feedback incorporation, and delivery management",
      "Scheduling content according to marketing timeline",
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>

      {/* Services Horizontal Cards */}
      <div className="services-cards">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <ul>
              {s.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
