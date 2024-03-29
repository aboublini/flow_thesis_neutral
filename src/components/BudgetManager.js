import React, {useEffect, useState} from 'react';
import Budget from "./Budget";
import './BudgetManagerStyle.css';
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import {nanoid} from "nanoid";
import { Doughnut, Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";
import Swal from "sweetalert2";

ChartJS.register(
    ArcElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const BudgetManager = () => {
    // Initial state for expenses
    const [expenses, setExpenses] = useState([
        {
            id: nanoid(),
            name: "Vacation",
            cost: "450"
        },
        {
            id: nanoid(),
            name: "Super Market",
            cost: "122"
        },
        {
            id: nanoid(),
            name: "Rent",
            cost: "800"
        },
        {
            id: nanoid(),
            name: "Taxes",
            cost: "250"
        },
    ]);

    // Retrieve expenses when page loads
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('react-expenses-app-data-neutral'));

        if (savedExpenses){
            setExpenses(savedExpenses);
        }
    },[])

    // Save expenses to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-expenses-app-data-neutral',
            JSON.stringify(expenses))
    }, [expenses]);


    // Function that adds a new expense to expenses list
    const addExpense = (name, price, remaining) => {

        const newExpense = {
            id: nanoid(),
            name: name,
            cost: price,
        }

        if ( name === "" || price === "" ) {
            // Prevent user from adding an expense with (name or cost) attributes missing
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "Expense name or cost missing!"
                });
        }
        else if (isNaN(price)) {
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "Price must be a number!"
                });
        }
        else {
            const newExpenses = [...expenses, newExpense];
            setExpenses(newExpenses);
        }

    }

    // Function that deletes an expense from the expenses list
    const deleteExpense = (id) => {

        // Confirmation message on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            title: 'Are you sure that you want to delete this expense?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                    // Array with the rest of the notes
                    const newExpenses = expenses.filter((expense) => expense.id !== id);

                    // Update notes
                    setExpenses(newExpenses);
            }
        });

    }


    // Initialize budget
    let budget = 3000;

    // Calculating total expenses
    let total = 0;
    for (let element of expenses) {
        total = total + Number(element.cost);
    }

    // Calculate remaining money
    let remain = budget - total;


    // Chart handling
    const doghnutData = {
        labels: ["Spent", "Remaining"],
        datasets: [{
            label: "€",
            data: [total, remain],
            backgroundColor: ["#6069FA", "rgba(95, 105, 250, .3)"],
            borderColor: ["#6069FA", "rgba(95, 105, 250, .1)"],
        }]
    }


    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: "Raleway"
                    }
                }
            }
        }
    };


    return (
        <div className="outer-dv">
            <br/><br/><br/><br/>

            <div className="general">
                <h1 className="this-month-title">This month</h1>
                <div className="this-month">
                    <div className="general-row">
                        <Budget budget={budget}/>
                    </div>
                    <div className="general-row">
                        <Remaining remain={remain}/>
                    </div>
                    <div className="general-row">
                        <ExpenseTotal total={total}/>
                    </div>
                </div>

            </div>

            <div className="general">
                <h1 className="this-month-title">Expenses</h1>
                <div className="this-month">
                    <div className="exp-list">
                        <div className="col-sm">
                            <ExpenseList
                                expenses={expenses}
                                handleDeleteExpense={deleteExpense}
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="third">
                <div className="general-add1">
                    <h1 className="this-month-title">Add Expense</h1>
                    <div className="this-month-add">
                        <div className="chart-cont">
                            <AddExpense
                                handleAddExpense={addExpense}
                            />
                        </div>

                    </div>

                </div>
                <div className="general-add2">
                    <h1 className="this-month-title">Quick View</h1>
                    <div className="this-month-add">
                        <div className="chart-cont">
                            <Doughnut
                                data={doghnutData}
                                options={options}
                            ></Doughnut>
                        </div>
                    </div>

                </div>

            </div>
            <br/><br/>
        </div>
    );
};

export default BudgetManager;