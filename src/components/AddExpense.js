import React, {useState} from 'react';

const AddExpense = ({ handleAddExpense }) => {
    // Initial state for two text boxes
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    // Setting name and cost values with corresponding user input
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCostChange = (event) => {
        setCost(event.target.value);
    }

    // Call addExpense function when user presses + button
    const handleSaveClick = (e) => {
        e.preventDefault(); // prevent page from reloading
        handleAddExpense(name, cost);
        setName("");
        setCost("");
    }

    return (
        <form>
            <div className="row">
                <div className="col-sm lab">
                    <label for="name">Expense Name: </label>
                    <input
                           type="text"
                           className="form-control"
                           id="name"
                           placeholder="Expense name..."
                           value={name}
                           onChange={handleNameChange}
                    ></input>
                </div>

                <div className="col-sm lab">
                    <label for="cost">Cost:  </label>
                    <input
                           type="text"
                           className="form-control"
                           id="cost"
                           placeholder="Expense cost..."
                           value={cost}
                           onChange={handleCostChange}
                    ></input>
                </div>

                <div className="col-sm">
                    <button type="submit" className="save-btn" onClick={handleSaveClick}>Add</button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;