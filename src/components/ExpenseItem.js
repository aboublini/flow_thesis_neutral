import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri"

const ExpenseItem = ({ id, name, cost, handleDeleteExpense}) => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let monthName = month[d.getMonth()];

    return (
        <li className="list-row">
            <h4 className="exp-name">{name}</h4>
            <h4 className="exp-name">{monthName}</h4>
            <div className="list-cont">
                <span className="">
                    {cost}€
                    {"  "}
                </span>
            </div>
            <RiDeleteBin7Line
            className="delete-icon"
            size="1.5em"
            onClick={() => handleDeleteExpense(id)}
            />
        </li>
    );
}

export default ExpenseItem;