import React from "react";
import styles from "../modules/movieVideosSection.module.css";

const YouTubeVideo = ({ video }) => {
  return (
    <iframe
      className={`col-md-5 me-3 mb-3 ${styles.videoCard}`}
      height={300}
      src={`https://www.youtube.com/embed/${video.key}`}
      title={video.name}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeVideo;
