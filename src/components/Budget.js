import React from 'react';
import Logo from "../visual-material/purple-money.png";

const Budget = ({ handleBudgetChange, budget }) => {

    return (
        <div className="alert">
            <h3>Budget:</h3>
            <div className="alert-inside">
                <span>{budget}€</span>
                <img src={Logo} className="budget-img" alt=""/>
            </div>
        </div>
    );
};

export default Budget;