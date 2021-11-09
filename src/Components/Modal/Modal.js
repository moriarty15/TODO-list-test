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
          <button onClick={() => { toggleModal() }}  className={style.close}>
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
            <p  className={style.text}>Change todo</p>            
            <textarea
          className={style.textarea}
              
              onChange={createNewTodo}
              value={changeTodo}
              type="text"
              placeholder="input TODO"
            ></textarea>
            <button className={style.btn}
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
