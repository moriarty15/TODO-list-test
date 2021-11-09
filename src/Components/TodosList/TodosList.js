import { useState } from "react";
import TodoItem from "../TodoItem";
import Modal from "../Modal/Modal";
import style from "./TodoList.module.css";

export default function TodosList({
  arrTodo,
  setArrTodo,
  complieted1,
  setComplited1,
}) {
  const [showModal, setShowModal] = useState(false);
  const [context, setContext] = useState("");
  const [currentId, setCurrentId] = useState("");
  const changeTodo = (todoId) => {
    const targetTodo = arrTodo.find((todo, i) => todoId === i).split("M: ")[1];
    setContext(targetTodo);
    setCurrentId(todoId);
    toggleModal();
  };
  const toggleModal = () => {
    return setShowModal(!showModal);
  };
  const deleteTodo = (todoId) => {
    const filterTodo = arrTodo.filter((todo, i) => {
      return i !== todoId;
    });
    complieted1.splice(todoId, 1);
    setArrTodo(filterTodo);
  };
  return (
    <>
      <ul className={style.list}>
        {arrTodo.length !== 0 &&
          arrTodo.map((todo, i) => {
            return (
              <>
                <li
                  key={todo}
                  className={(complieted1[i] && style.checked) || style.item}
                >
                  <TodoItem
                    todo={todo}
                    i={i}
                    changeTodo={changeTodo}
                    deleteTodo={deleteTodo}
                    complieted1={complieted1}
                    setComplited1={setComplited1}
                  />{" "}
                </li>
              </>
            );
          })}
      </ul>
      {showModal && (
        <Modal
          context={context}
          currentId={currentId}
          setArrTodo={setArrTodo}
          arrTodo={arrTodo}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}
