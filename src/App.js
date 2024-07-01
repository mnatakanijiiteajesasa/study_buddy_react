// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => {
  const [bookResults, setBookResults] = useState([]);
  const [journalResults, setJournalResults] = useState([]);
  const [youtubeResults, setYouTubeResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      const filteredBooks = data.docs.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setBookResults(filteredBooks);
      setError(null);
    } catch (error) {
      console.error("Error fetching books:", error.message);
      setError("Failed to fetch books. Please try again later.");
    }
  };

  const handleSearchJournals = async (query) => {
    try {
      const response = await fetch(
        `https://doaj.org/api/v2/search/articles/${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch journal articles");
      }
      const data = await response.json();
      setJournalResults(data.results);
      setError(null);
    } catch (error) {
      console.error("Error fetching journal articles:", error.message);
      setError("Failed to fetch journal articles. Please try again later.");
    }
  };

  const handleSearchYouTube = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch YouTube videos");
      }
      const data = await response.json();
      setYouTubeResults(data.items);
      setError(null);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error.message);
      setError("Failed to fetch YouTube videos. Please try again later.");
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSearchBooks={handleSearchBooks}
                onSearchJournals={handleSearchJournals}
                onSearchYouTube={handleSearchYouTube}
                bookResults={bookResults}
                journalResults={journalResults}
                youtubeResults={youtubeResults}
                error={error}
              />
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
