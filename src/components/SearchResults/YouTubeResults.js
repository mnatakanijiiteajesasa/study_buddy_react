import React from "react";
import "./Results.css";

const YouTubeResult = ({ video }) => {
  return (
	<div className="result-list">
    <div className="result-item">
      <div className="video-info">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="video-thumbnail"
        />
        <div className="video-details">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.channelTitle}</p>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-link"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
	</div>
  );
};

export default YouTubeResult;
