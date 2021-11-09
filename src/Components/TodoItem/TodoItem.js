import style from "./TodoItem.module.css";

export default function TodoItem({
  changeTodo,
  deleteTodo,
  text,
  date,
  id,
  index,
  completed,
  setCompleted,
}) {
  const handleChecked = (e) => {
    const newComplite = [...completed];
    for (let i = 0; i < newComplite.length; i += 1) {
      if (newComplite[i].id === index) {
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
          checked={completed}
          onChange={handleChecked}
        />
        <p>Дата создания: {date }</p>
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
