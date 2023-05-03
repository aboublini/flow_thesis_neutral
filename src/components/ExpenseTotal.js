import React from 'react';
import Logo from "../visual-material/green-money.png";

const ExpenseTotal = ({ total }) => {

    return (
        // <div className="alert alert-primary">
        //     <span>Spent so far:</span>
        //     <span>{total}€</span>
        // </div>

        <div className="alert">
            <h3>Spent so far:</h3>
            <div className="alert-inside">
                <span>{total}€</span>
                <img src={Logo} className="budget-img" alt=""/>
            </div>
        </div>
    );
};

export default ExpenseTotal;