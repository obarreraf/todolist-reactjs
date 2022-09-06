import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI() {
    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        
        <TodoContext.Consumer>
          {({ error, loading, searchedTodos, completeTodo, deleteTodo}) => (<TodoList>
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
            </TodoList>)
          }
        </TodoContext.Consumer>

        <CreateTodoButton />
        
      </React.Fragment>
    );
}

export {AppUI};