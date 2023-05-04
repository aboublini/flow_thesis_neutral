import React, { useState } from "react";
import ProgressBar from "./ProgressBar";


export default function TodoForm(props) {
    const [input, setInput] = useState("");

    // Call add to-do function on form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
                placeholder="Write something here"
            />
            <button type="submit" className="todo-button">Add</button>
        </form>
    );
}