import style from "./TodoItem.module.css";
import PropTypes from "prop-types";

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
          className={style.checkbox}
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

TodoItem.propTypes = {
  data: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
  changeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
}