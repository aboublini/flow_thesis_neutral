import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            <input className="check-box" type="checkbox" onClick={() => completeTodo(todo.id)} checked={todo.completed}/>
            <div className="todo-item">{todo.text}</div>
            <div className="iconsContainer">
                <RiDeleteBin7Line style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    )
}