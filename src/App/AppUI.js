import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from '../TodoForm';
import { Modal } from "../Modal";
import { LoadingTodo} from "../LoadingTodo";

function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
          {loading && 
            new Array(4).fill().map((item, index)=>(
              <LoadingTodo key={index} />
          ))}
          {error && <p>Existe un error...</p>}
          {!loading && !searchedTodos.length && <p>¡Crea tu primer ToDo!</p>}
          
          {searchedTodos.map(
            todo =>(<TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() =>completeTodo(todo.text)}
              onDelete={() =>deleteTodo(todo.text)}/>))}
      </TodoList>

      {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
  );
}

export {AppUI};