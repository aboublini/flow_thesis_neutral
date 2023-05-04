import React, {useEffect, useState} from "react";
import './TodoComponentStyle.css'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import CalendarComponent from "./CalendarComponent";
import {nanoid} from "nanoid";
import Swal from "sweetalert2";
import ProgressBar from "./ProgressBar";

function TodoComponent() {

    // To do list initial state
    const [todos, setTodos] = useState([
        {
            id: nanoid(),
            text: "Buy groceries",
            completed: false,
            important: false
        },
        {
            id: nanoid(),
            text: "Go to gym",
            completed: false,
            important: false
        },
    ]);

    // Retrieve to do list when page loads
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('react-todo-app-data'));

        if (savedTodos){
            setTodos(savedTodos);
        }
    },[])

    // Save todos to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-todo-app-data',
            JSON.stringify(todos))
    }, [todos]);

    // Add to do function
    const addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            text: text,
            completed: false,
            important: true
        }

        if (newTodo.text === "") {
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "You can't add an empty to do!"
                });
        }
        else {
            const newTodos = [...todos, newTodo]; // new array with old to-dos and new to-do
            setTodos(newTodos);
        }

    };

    // Delete to do function
    const removeTodo = (id) => {
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            title: 'Are you sure that you want to delete this to-do?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
                    setTodos(updatedTodos);
            }
        });

    };

    // Mark a to-do as done function
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed

            }
            return todo
        })
        setTodos(updatedTodos)
    }

    // Important to dos are the to-dos that the user adds
    let sortedTodos = todos.sort((a, b) => b.important - a.important)

    // Number of to-do's and completed to dos for the progress bar
    const numOfItems = todos.length;
    const completedTodos = todos.filter(todo => todo.completed);
    const completedTodoCount = completedTodos.length;
    const c = completedTodoCount*100/numOfItems;

    return (
        <div className="out">
            <br/><br/><br/><br/><br/><br/>
            <div className="outer-container">
                <div className="left-content">
                    <h1 className="this-month-title">To-do list</h1>

                    <div className="to-do-cont">

                        <div className="todo">

                            <TodoForm
                                todos={todos}
                                addTodo={addTodo}
                                c={c}
                            />
                            <ProgressBar bgcolor="#6069FA" progress={c}  height={5} />
                            <div className="sorted">
                                {sortedTodos.map((todo) => {
                                    return (
                                        <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
                                    )
                                })}
                            </div>




                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <h1 className="this-month-title">Calendar</h1>
                    <div className="cal">
                        <CalendarComponent></CalendarComponent>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
}

export default TodoComponent;