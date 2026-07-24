import React from 'react'
import './ScrapbookCard.scss'
const ScrapbookCard = ({book}) => {
  return (
 <div className="scrapbook-card">

      <img
        src={book.coverImg}
        alt={book.title}
        className="cover-image"
      />

      <div className="card-content">

        <h2>{book.title}</h2>

        <p>{book.desc}</p>

        <div className="card-footer">

          <span className="theme">
            {book.theme}
          </span>

          <span className={book.isPublic ? "public" : "private"}>
            {book.isPublic ? "🌍 Public" : "🔒 Private"}
          </span>

        </div>

      </div>

    </div>
  )
}

export default ScrapbookCard
