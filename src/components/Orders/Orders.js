import React from 'react';
import fakeData from '../../fakeData/booksData.json'

const Orders = () => {
    const handelOrderBook = () => {
        fetch('http://localhost:4444/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <h1>Welcome Order</h1>
            <button onClick={handelOrderBook} class="btn btn-success">Order Book</button>
        </div>
    );
};

export default Orders;