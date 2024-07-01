import React, { useState } from "react";
import BookResult from "../SearchResults/BookResult";
import "./BookSearch.css";

const BookSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    setLoading(true);
    setError(null);  // Reset error state before new search
    try {
      if (query.trim() === "") {
        setError("Please enter a search query");
        setLoading(false);
        return;
      }
      const results = await onSearch(query);
      setBooks(results || []);  // Ensure results is always an array
    } catch (err) {
      setError("Failed to fetch books. Please try again later.");
      setBooks([]);  // Ensure books is set to an empty array on error
    }
    setLoading(false);
  };

  const handleSearchBook = (e) => {
    e.preventDefault();
    searchBooks();
  };

  const handleDownload = (book, method) => {
    const message = `Check out this book: ${book.title} by ${book.author_name ? book.author_name.join(", ") : "Unknown Author"}. More info at: https://openlibrary.org${book.key}`;

    if (method === "email") {
      window.location.href = `mailto:?subject=${encodeURIComponent(
        "Book Recommendation"
      )}&body=${encodeURIComponent(message)}`;
    } else if (method === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchBook}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div className="loader"></div>}
      {error && <p className="error-message">{error}</p>}
      <div className="result-list">
        {books.map((book) => (
          <BookResult key={book.key} book={book} onDownload={handleDownload} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
