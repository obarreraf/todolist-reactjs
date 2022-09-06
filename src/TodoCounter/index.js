import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const { totalTodos,completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Haz Completado {completedTodos} de {totalTodos} To Do's</h2>
    )
}

export {TodoCounter};