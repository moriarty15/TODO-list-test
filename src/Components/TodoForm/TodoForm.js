import { useState } from "react/cjs/react.development";

export default function TodoForm({ setTodo, arrTodo,setComplited1, complieted1 }) {
  const [newTodo, setNewTodo] = useState("");
  const createNewTodo = (e) => {
    const createTodo = e.target.value;
    setNewTodo(createTodo);
  };
  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      alert("пожалуйста введите текст");
      reset();
      return;
    }

    for (let i = 0; i < arrTodo.length; i += 1) {
      if (arrTodo[i].split("M: ")[1] === newTodo.trim()) {
        alert("такая TODO уже существует");
        reset();
        return;
      }
    }

    const date = new Date();
    setTodo(`${date.toLocaleString("en-US")}: ` + newTodo);
    setComplited1([...complieted1, false])
    reset();
  };
  const reset = () => {
    setNewTodo("");
  };
  return (
    <>
      <form onSubmit={handleCreateTodo}>
        Change you first todo
        <textarea
          onChange={createNewTodo}
          value={newTodo}
          type="text"
          placeholder="input TODO"
        ></textarea>
        <button>Create Todo</button>
      </form>
    </>
  );
}
