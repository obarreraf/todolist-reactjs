import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form>
            <label>...</label>
            <textarea
                value={newTodoValue} 
                onChange={onChange}
                placeholder="Texto de Ejemplo" 
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button-cancel">
                    Cancelar
                </button>
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="TodoForm-button TodoForm-button-add">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};