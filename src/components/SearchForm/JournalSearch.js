import React, { useState } from "react";
import "./Journal.css";

function JournalSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchArticles = async () => {
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
      setError("Failed to fetch articles. Please try again later.");
    }
    setLoading(false);
  };

  const handleSearchJournal = (e) => {
    e.preventDefault();
    searchArticles();
  };

  return (
    <div>
      <form onSubmit={handleSearchJournal}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for journal articles..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div className="loader"></div>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default JournalSearch;
