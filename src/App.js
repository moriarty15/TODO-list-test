import "./App.css";
import TodosList from "./Components/TodosList";
import TodoForm from "./Components/TodoForm";
import { useState, useEffect } from "react";

const date = new Date();

function App() {
  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("completed")) ?? [
        {
          id: "firstTodo",
          completed: false,
          text: "create you first ToDo",
          date: date.toLocaleString("en-US"),
        },
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const countCompletedToDo = todos.filter(({completed}) => completed === true)

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
        />
        <p className="total">Общее кол-во ToDo: {todos.length}</p>
        <p className="total">Кол-во выполненых ToDo: {countCompletedToDo.length}</p>
        <TodosList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
