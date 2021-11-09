import { useState } from "react";
import TodoItem from "../TodoItem";
import Modal from "../Modal/Modal";
import style from "./TodoList.module.css";

export default function TodosList({
  arrTodo,
  setArrTodo,
  completed,
  setCompleted,
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
    const updateTodo = arrTodo.filter((todo, i) => {
      return i !== todoId;
    });
    setArrTodo(updateTodo);
   
    const updateTodoComplited = completed.filter((todo, i) => {
      return i !== todoId
    })
    setCompleted(updateTodoComplited)
  };
  return (
    <>
      <ul className={style.list}>
        {arrTodo.length !== 0 &&
          arrTodo.map((todo, i) => {
            return (
              <li
                key={completed[i].id}
                className={
                  (completed[i].complited && style.checked) || style.item
                }
              >
                <TodoItem
                  todo={todo}
                  id={completed[i].id}
                  index={i}
                  changeTodo={changeTodo}
                  deleteTodo={deleteTodo}
                  completed={completed}
                  setCompleted={setCompleted}
                />{" "}
              </li>
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
