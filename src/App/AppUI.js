import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
          {loading && <p>Estamos cargando...</p>}
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

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export {AppUI};