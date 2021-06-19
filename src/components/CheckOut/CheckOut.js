import './CheckOut.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const CheckOut = (props) => {
    const { booksList } = useParams();

    const [book, setBook] = useState({})
    useEffect(() =>{
        const url = `https://pacific-shore-99351.herokuapp.com/${booksList}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setBook(data))
        .then(data =>console.log(data))
    })
    
    return (
        <div class="container">
            <h3 className="chekckTitle">CheckOut</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{booksList}</td>
                        <td>1</td>
                        <td>$ 234</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <th>$ 234</th>
                        
                    </tr>
                </tbody>
            </table> <br/>
            <button class="btn btn-success btnDesing"><a className="btnDesing" href="/orders">Checkout</a></button>
        </div>
    );
};

export default CheckOut;