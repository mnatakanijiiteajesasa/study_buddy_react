// src/components/SearchForm/YouTubeSearch.js
import React, { useState } from "react";
import "./YoutubeSearch.css";

function YouTubeSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchVideos = async () => {
    setLoading(true);
    try {
      if (query.trim() === "") {
        setError("Please enter a search query");
        setLoading(false);
        return;
      }
      await onSearch(query);
      setError(null);
    } catch (err) {
      setError("Failed to fetch YouTube videos. Please try again later.");
    }
    setLoading(false);
  };

  const handleSearchYouTube = (e) => {
    e.preventDefault();
    searchVideos();
  };

  return (
    <div>
      <form onSubmit={handleSearchYouTube}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div className="loader"></div>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default YouTubeSearch;
