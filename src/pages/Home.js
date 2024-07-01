import React, { useState } from "react";
import BookSearch from "../components/SearchForm/BookSearch";
import JournalSearch from "../components/SearchForm/JournalSearch";
import YouTubeSearch from "../components/SearchForm/YouTubeSearch";
import BookResult from "../components/SearchResults/BookResult";
import JournalResult from "../components/SearchResults/JournalResult";
import YouTubeResults from "../components/SearchResults/YouTubeResults";
import "./Home.css";

const Home = ({
  onSearchBooks,
  onSearchJournals,
  onSearchYouTube,
  bookResults,
  journalResults,
  youtubeResults,
}) => {
  const [activeSearch, setActiveSearch] = useState(null);

  const handleSearchBooks = (query) => {
    setActiveSearch("books");
    onSearchBooks(query);
  };

  const handleSearchJournals = (query) => {
    setActiveSearch("journals");
    onSearchJournals(query);
  };

  const handleSearchYouTube = (query) => {
    setActiveSearch("youtube");
    onSearchYouTube(query);
  };

  return (
    <div>
    <div className="home">
      <h1>Welcome to Study Buddy!</h1>
      <p>Find your book, journal, or YouTube tutorial with one search</p>

      <div className="search-sections-wrapper">
        <div className="search-section book">
          <h2>Book Search</h2>
          <BookSearch onSearch={handleSearchBooks} />
        </div>
        <div className="search-section journal">
          <h2>Journal Search</h2>
          <JournalSearch onSearch={handleSearchJournals} />
        </div>
        <div className="search-section youtube">
          <h2>YouTube Search</h2>
          <YouTubeSearch onSearch={handleSearchYouTube} />
        </div>
      </div>
    </div>
    <div className="results-section">
        {activeSearch === "books" && (
          <div className="book-results">
            {bookResults.map((book) => (
              <BookResult key={book.key} book={book} />
            ))}
          </div>
        )}
        {activeSearch === "journals" && (
          <div className="journal-results">
            {journalResults.map((journal) => (
              <JournalResult key={journal.id} journal={journal} />
            ))}
          </div>
        )}
        {activeSearch === "youtube" && (
          <div className="youtube-results">
            {youtubeResults.map((video) => (
              <YouTubeResults key={video.id.videoId} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
