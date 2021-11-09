// import { useState } from "react/cjs/react.development";
// import style from "./TodoItem.module.css";

export default function TodoItem({
  changeTodo,
  deleteTodo,
  todo,
  i,
    complieted1,
  setComplited1,
}) {
  //   const [completed, setComplited] = useState(false);
    const handleChecked = (e) => {
        const newComplite = [...complieted1];
        newComplite[i] = e.target.checked
        setComplited1(newComplite)
    return 
  };

  return (
    <>
      <input type="checkbox" checked={complieted1[i]} onChange={handleChecked} />
      <p>{todo}</p>
      <button
        onClick={() => {
          return changeTodo(i);
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          return deleteTodo(i);
        }}
      >
        Delete
      </button>
    </>
  );
}
