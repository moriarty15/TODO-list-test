import "./App.css";
import TodosList from "./Components/TodosList";
import TodoForm from "./Components/TodoForm";
import { useState, useEffect } from "react";

function App() {
  const [complieted1, setComplited1] = useState(() => {
    return JSON.parse(window.localStorage.getItem("complited")) ?? []
  })
  const [todo, setTodo] = useState("");
  const [arrTodo, setArrTodo] = useState(() => {
    return JSON.parse(window.localStorage.getItem("todos")) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(arrTodo));
  }, [arrTodo]);

  useEffect(() => {
    window.localStorage.setItem("complited", JSON.stringify(complieted1))
  }, [complieted1])

  useEffect(() => {
    if (todo === "") return;
    setArrTodo([...arrTodo, todo]);
  }, [todo]);

  return (
    <div className="App">
      <h1>hello world</h1>
      <TodoForm setTodo={setTodo} arrTodo={arrTodo} complieted1={complieted1} setComplited1={setComplited1} />
      <TodosList arrTodo={arrTodo} setArrTodo={setArrTodo} complieted1={complieted1} setComplited1={setComplited1} />
    </div>
  );
}

export default App;
