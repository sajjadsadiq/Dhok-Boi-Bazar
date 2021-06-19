import React from 'react';
import './Header.css'
import MenuBookIcon from '@material-ui/icons/MenuBook';


const Header = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand logo" href="/home"><MenuBookIcon></MenuBookIcon> Dhok<span class="boi">Boi</span>Bazar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div  class="navbar-nav ml-auto" id="navbar-Rigt">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            <a class="nav-link" href="/orders">Orders</a>
                            <a class="nav-link" href="/admin">Admin</a>
                            <a class="nav-link" href="/deals" >Deals</a>
                            <button class="btn btn-success"><a class="btnLink" href="/login">Login</a></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;