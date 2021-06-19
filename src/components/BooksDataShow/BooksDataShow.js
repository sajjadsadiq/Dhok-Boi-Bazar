import React from 'react';
import './BooksDataShow.css'

const BooksDataShow = (props) => {
    const { image, title, author, price, btn, id } = props.book;

    return (
        <div class="container">
            <div className="box-container">
                <div className="book-container">
                    <img className="book" src={image} alt="" />
                </div>
                <div className="article">
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <div className="price-btn">
                        <div className="box-price">
                            <h4>${price}</h4>
                        </div>
                        <div className="box-btn">
                            <button class="btn btn-success"><a className="box-btn-design" href={`/checkout/${id}`}>{btn}</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDataShow;