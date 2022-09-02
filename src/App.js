//import './App.css';
import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import { CreateTodoButton } from "./CreateTodoButton";
import {TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {text: 'hacer algo', completed: true},
  {text: 'hacer mercado', completed: true},
  {text: 'Estudiar', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

  }

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}/>
      <CreateTodoButton />
      
      <TodoList>
        {searchedTodos.map(todo =>(<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>


      
    </React.Fragment>
  );
}


export default App;
