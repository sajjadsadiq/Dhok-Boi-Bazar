import React, { useEffect, useState } from 'react';
import BooksDataShow from '../BooksDataShow/BooksDataShow';
import Search from '../Search/Search';

const BooksDataLoad = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const url = `https://pacific-shore-99351.herokuapp.com/books`
        fetch(url)
        .then(res => res.json())
        .then(data => setBooks(data))
    })
    return (
        <div>
            <Search></Search>
            {
                books.map(book => <BooksDataShow book = {book}></BooksDataShow>)
            }
        </div>
    );
};

export default BooksDataLoad;