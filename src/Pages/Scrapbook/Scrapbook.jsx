import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleScrapbook } from "../../Services/MemoryServices";
import LetterPage from "../../Components/LetterPage/LetterPage";
import MemoryPage from "../../Components/MemoryPage/MemoryPage";
import "./Scrapbook.scss";

const Scrapbook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [activePage, setActivePage] = useState("cover");

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const response = await getSingleScrapbook(id);
    setBook(response.data.book);
  };

  if (!book) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="scrapbook">

      {/* Header */}

      <div className="scrapbook-header">

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          ← Back
        </button>

        <h2>{book.title}</h2>

      </div>

      {/* Body */}

      <div className="scrapbook-body">

        {/* Sidebar */}

        <div className="scrapbook-sidebar">

          <button
            className={activePage === "cover" ? "active" : ""}
            onClick={() => setActivePage("cover")}
          >
            📖 Cover
          </button>

          <button
            className={activePage === "letter" ? "active" : ""}
            onClick={() => setActivePage("letter")}
          >
            💌 Letter
          </button>

          <button
            className={activePage === "memories" ? "active" : ""}
            onClick={() => setActivePage("memories")}
          >
            🖼 Memories
          </button>

          <button
            className={activePage === "notes" ? "active" : ""}
            onClick={() => setActivePage("notes")}
          >
            📝 Notes
          </button>

          <button
            className={activePage === "timeline" ? "active" : ""}
            onClick={() => setActivePage("timeline")}
          >
            📅 Timeline
          </button>

        </div>

        {/* Right Content */}

        <div className="scrapbook-content">

          {activePage === "cover" && (

            <div className="cover-page">

              <img
                src={book.coverImg}
                alt={book.title}
              />

              <h1>{book.title}</h1>

              <p>{book.desc}</p>

              <span className="theme">
                {book.theme}
              </span>

              <h3>
                {book.isPublic ? "🌍 Public" : "🔒 Private"}
              </h3>

            </div>

          )}

          {activePage === "letter" && (
           <LetterPage book = {book}/>
          )}

          {activePage === "memories" && (
           <MemoryPage/>
          )}

          {activePage === "notes" && (
            <h2>Notes Page Coming Soon...</h2>
          )}

          {activePage === "timeline" && (
            <h2>Timeline Page Coming Soon...</h2>
          )}

        </div>

      </div>

    </div>
  );
};

export default Scrapbook;