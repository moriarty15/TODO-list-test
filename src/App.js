import "./App.css";
import TodosList from "./Components/TodosList";
import TodoForm from "./Components/TodoForm";
import { useState, useEffect } from "react";

function App() {
  const [completed, setCompleted] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("completed")) ?? [
        { id: "firstTodo", completed: false },
      ]
    );
  });
  const [todo, setTodo] = useState("");
  const [arrTodo, setArrTodo] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("todos")) ?? [
        "create you first ToDO",
      ]
    );
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(arrTodo));
  }, [arrTodo]);

  useEffect(() => {
    window.localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    if (todo === "") return;
    setArrTodo([...arrTodo, todo]);
  }, [todo]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <TodoForm
          setTodo={setTodo}
          arrTodo={arrTodo}
          completed={completed}
          setCompleted={setCompleted}
        />
        <TodosList
          arrTodo={arrTodo}
          setArrTodo={setArrTodo}
          completed={completed}
          setCompleted={setCompleted}
        />
      </div>
    </div>
  );
}

export default App;
