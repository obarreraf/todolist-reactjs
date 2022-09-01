//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { CreateTodoButton } from "./CreateTodoButton";
import {TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
  {text: 'hacer algo', completed: false},
  {text: 'hacer mercado', completed: false},
  {text: 'Estudiar', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <CreateTodoButton />
      
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>


      
    </React.Fragment>
  );
}


export default App;
