import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import "./App.css";

const App = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    async function get_books(search_query) {
        const key = "AIzaSyDLtReGJIEMw7Reg0d_QBvSF5pxJTVpKcQ";
        const url = `https://www.googleapis.com/books/v1/volumes?q=${search_query}&key=${key}&maxResults=40`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.totalItems == 0) {
            setBooks([]);
        } else {
            setBooks(data.items);
        }
    }

    return (
        <div className="app">
            <input
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        get_books(search);
                    }
                }}
                placeholder="Search for books"
            />

            <div className="shelf-cont">
                {books.length > 0 ? (
                    books.map((book) => {
                        return <BookCard book={book} />;
                    })
                ) : (
                    <p className="no-books-found">No books found</p>
                )}
            </div>
        </div>
    );
};

export default App;
