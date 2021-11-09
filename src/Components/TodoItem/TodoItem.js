import style from "./TodoItem.module.css";

export default function TodoItem({
  changeTodo,
  deleteTodo,
  todo,
  id,
  index,
  completed,
  setCompleted,
}) {
  const handleChecked = (e) => {
    const newComplite = [...completed];
    for (let i = 0; i < newComplite.length; i += 1) {
      if (newComplite[i].id === id) {
        newComplite[index].complited = e.target.checked;
        setCompleted(newComplite);
        break;
      }
    }
    return;
  };

  return (
    <>
      <div className={style.contain}>
        <input
          type="checkbox"
          value={id}
          checked={completed[index].complited}
          onChange={handleChecked}
        />
        <p className={style.text}>{todo}</p>
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
