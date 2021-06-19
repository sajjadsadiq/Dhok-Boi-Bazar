import React from 'react';
import AddBooks from '../AddBooks/AddBooks';
import './Admin.css'
import AddIcon from '@material-ui/icons/Add';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Admin = () => {
    return (
        <div className="adminContainer">
            <div className="adminLeft">
                <div className="leftContent">
                    <h4><AccountBoxIcon></AccountBoxIcon> Manager Book</h4>
                    <h4><AddIcon></AddIcon> Add Book</h4>
                    <h4><LoyaltyIcon></LoyaltyIcon> Edit Book</h4>
                </div>
            </div>
            <div className="adminRight">
                <AddBooks></AddBooks>
            </div>
        </div>
    );
};

export default Admin;