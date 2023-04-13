import React from "react";

const BookCard = ({ book }) => {

    let img, title, author, pages;

    img = book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://via.placeholder.com/400";

    title = book.volumeInfo.title
        ? book.volumeInfo.title.length < 25
            ? book.volumeInfo.title
            : book.volumeInfo.title.substring(0, 25) + "..."
        : "Title unknown"

    author = book.volumeInfo.authors
        ? book.volumeInfo.authors[0].length < 25
            ? book.volumeInfo.authors[0]
            : book.volumeInfo.authors[0].substring(0, 25) + "..."
        : "Author unknown";

    pages =
        book.volumeInfo.pages === 0 || book.volumeInfo.pages === undefined
            ? "Pages unknown"
            : book.volumeInfo.pages + " pages";

    return (
        <div className="book-cont">
            <img src={img} />
            <div className="info-cont">
                <p className="title-p">{title}</p>
                <p className="author-p">{author}</p>
                <p className="page-p">{pages}</p>
            </div>
        </div>
    );
};

export default BookCard;
