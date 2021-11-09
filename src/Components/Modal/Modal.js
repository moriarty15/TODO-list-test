import { createPortal } from "react-dom";
import PropTypes from "prop-types"
import { useState } from "react";
import style from "./Modal.module.css";
const modalRoot = document.getElementById("modal-root");

export default function Modal({
  context,
  setTodos,
  currentId,
  todos,
  toggleModal,
}) {
  const [changeTodo, setChangeTodo] = useState(context);
  const handleChangeTodo = (e) => {
    e.preventDefault();
    if (changeTodo.trim() === "") {
      alert("введите текст");
      return;
    }
    for (let i = 0; i < todos.length; i += 1) {
      if (todos[i].text === changeTodo.trim()) {
        alert("такая TODO уже существует");
        return;
      }
    }
    const date = new Date();
    const newArray = [...todos];
    newArray[currentId] = {
      completed: false,
      id: newArray[currentId].id,
      text: changeTodo,
      date: date.toLocaleString("en-US"),
    };
    setTodos(newArray);
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
          <button
            onClick={() => {
              toggleModal();
            }}
            className={style.close}
          >
            <svg
              width="40"
              height="40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.667 12.88 27.787 11l-7.454 7.453L12.88 11 11 12.88l7.453 7.453L11 27.787l1.88 1.88 7.453-7.454 7.454 7.454 1.88-1.88-7.454-7.454 7.454-7.453Z"
                fill="#212121"
              />
            </svg>
          </button>
          <form onSubmit={handleChangeTodo}>
            <p className={style.text}>Change todo</p>
            <textarea
              className={style.textarea}
              onChange={createNewTodo}
              value={changeTodo}
              type="text"
              placeholder="input TODO"
            ></textarea>
            <button className={style.btn}>Change Todo</button>
          </form>
        </>
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  context: PropTypes.string,
  currentId: PropTypes.number,
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func,
  toggleModal: PropTypes.func,
}