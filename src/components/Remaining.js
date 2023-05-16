import React from 'react';
import Logo from "../visual-material/orange-money.png";

const Remaining = ({ remain }) => {
    return (
        <div className="alert">
            <h3>Remaining:</h3>
            <div className="alert-inside">
                <span>{remain}€</span>
                <img src={Logo} className="budget-img" alt=""/>
            </div>
        </div>
    );
};

export default Remaining;