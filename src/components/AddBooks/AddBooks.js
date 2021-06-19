import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBooks.css'

const axios = require('axios').default;

const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const bookData = {
            book: data.book,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        }

        console.log(bookData)
        fetch('https://pacific-shore-99351.herokuapp.com/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server site response!'))
    };

    const handleImageUpload = (book) => {
        console.log(book.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '72fce66469a2ed71677f0a5d62878659')
        imageData.append('image', book.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formContainer">
                    <div className="topContainer">
                        <div className="bookName">
                            <label htmlFor="">Book Name</label> <br/>
                            <input class="form-control" name="book" placeholder="Book Name" ref={register} />
                        </div>
                        <div className="authorName">
                            <label htmlFor="">Author Name</label> <br/>
                            <input class="form-control" name="author" placeholder="Author Name" ref={register} />
                        </div>
                        <br />

                    </div>
                    <div className="bottomContainer">
                        <div className="addPrice">
                            <label htmlFor="">Add Price</label> <br/>
                            <input class="form-control" name="price" placeholder="Add Price" ref={register} />
                        </div>
                        <div className="uploadPhoto">
                            <label htmlFor="">Add Book Cover Photo</label> <br/>
                            <input name="upload" type="file" onChange={handleImageUpload} />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Save" class="btnDesing btn btn-success"/>
            </form>
        </div>
    );
};

export default AddBooks;