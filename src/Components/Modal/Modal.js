import { createPortal } from "react-dom";
import { useState } from "react/cjs/react.development";
import style from "./Modal.module.css";
const modalRoot = document.getElementById("modal-root");

export default function Modal({
  context,
  setArrTodo,
  currentId,
  arrTodo,
  toggleModal,
}) {
  const [changeTodo, setChangeTodo] = useState(context);
  const handleChangeTodo = (e) => {
    e.preventDefault();
    if (changeTodo.trim() === "") {
      alert("введите текст");
      return;
    }
    for (let i = 0; i < arrTodo.length; i += 1) {
      if (arrTodo[i].split("M: ")[1] === changeTodo.trim()) {
        alert("такая TODO уже существует");
        return;
      }
    }
    const date = new Date();
    const newArray = [...arrTodo];
    newArray[currentId] = `${date.toLocaleString("en-US")}: ` + changeTodo;
    setArrTodo(newArray);
    toggleModal();
  };
  const createNewTodo = (e) => {
    const createTodo = e.target.value;
    setChangeTodo(createTodo);
  };

  return createPortal(
    <div className={style.overlay}>
      <div className={style.modal}>
        <>
          <form onSubmit={handleChangeTodo}>
            Change todo
            <textarea
              onChange={createNewTodo}
              value={changeTodo}
              type="text"
              placeholder="input TODO"
            ></textarea>
            <button
            //   onClick={handleChangeTodo}
            >
              Change Todo
            </button>
          </form>
        </>
      </div>
    </div>,
    modalRoot
  );
}
