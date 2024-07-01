import React from "react";
import "./Results.css";

const JournalResult = ({ article }) => {
  return (
    <div className="result-list">
    <div className="result-item">
      <h3>{article.bibjson.title}</h3>
      <p>Journal: {article.bibjson.journal.title}</p>
      <a
        href={article.bibjson.link[0].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Article
      </a>
    </div>
    </div>
  );
};

export default JournalResult;
