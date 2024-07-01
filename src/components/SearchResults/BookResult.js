import React from "react";
import "./Results.css";

const BookResult = ({ book, onDownload }) => {
  return (
    <div className="result-list">
      <div className="result-item">
        <div className="book-info">
          {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="book-cover"
              height="100"
            />
          )}
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="read-link"
            >
              Read More
            </a>
            <div className="download-buttons">
              <button onClick={() => onDownload(book, "email")}>Email</button>
              <button onClick={() => onDownload(book, "whatsapp")}>
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
