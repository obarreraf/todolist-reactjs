import React from "react";
import './TodoCounter.css';

function TodoCounter({total,completed}){
    return (
        <h2 className="TodoCounter">Haz Completado {completed} de {total} To Do's</h2>
    )
}

export {TodoCounter};