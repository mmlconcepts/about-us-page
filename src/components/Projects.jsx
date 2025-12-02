import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
      fetchFeed();
    });
  }, []);

  async function fetchFeed() {
    try {
      const channelId = "UCMttmQXnh78NrWa9KTqQhxQ";

      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        )}`
      );

      const data = await res.json();

      if (data.items) {
        const entries = data.items.slice(0, 12).map((item) => {
          const id = item.link.split("v=")[1];
          return {
            id,
            title: item.title,
            link: item.link,
            thumb: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
          };
        });
        setVideos(entries);
      }
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="projects-page">
      <h2 className="projects-heading">Latest Projects</h2>

      <div className="projects-grid">
        {loading
          ? [...Array(8)].map((_, i) => <div className="skeleton-card" key={i}></div>)
          : videos.map((v) => (
              <a
                key={v.id}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="thumb-wrapper">
                  <img src={v.thumb} alt={v.title} loading="lazy" />
                </div>
                <p>{v.title}</p>
              </a>
            ))}
      </div>
    </div>
  );
};

export default Projects;
