import style from "./TodoItem.module.css";

export default function TodoItem({
  changeTodo,
  deleteTodo,
  text,
  date,
  index,
  todos,
  setTodos,
}) {
  const handleChecked = (e) => {
    const newComplite = [...todos];
    newComplite[index].completed = e.target.checked;
    return setTodos(newComplite);
  };

  return (
    <>
      <div className={style.contain}>
        <input
          type="checkbox"
          value={todos[index].completed}
          checked={todos[index].completed}
          onChange={handleChecked}
        />
        <p>Дата создания: {date}</p>
        <p className={style.text}> Todo: {text}</p>
      </div>
      <div className={style.btn__contain}>
        <button
          onClick={() => {
            return changeTodo(index);
          }}
          className={style.change}
        >
          Change
        </button>
        <button
          onClick={() => {
            return deleteTodo(index);
          }}
          className={style.delete}
        >
          Delete
        </button>
      </div>
    </>
  );
}
