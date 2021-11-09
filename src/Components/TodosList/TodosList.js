import { useState } from "react";
import TodoItem from "../TodoItem";
import Modal from "../Modal/Modal";
import style from "./TodoList.module.css";

export default function TodosList({
  todos,
  setTodos,
}) {
  const [showModal, setShowModal] = useState(false);
  const [context, setContext] = useState("");
  const [currentId, setCurrentId] = useState("");
  const changeTodo = (todoId) => {
    const targetTodo = todos.find(({ id }, i) => todoId === i);
    setContext(targetTodo.text);
    setCurrentId(todoId);
    toggleModal();
  };
  const toggleModal = () => {
    return setShowModal(!showModal);
  };
  const deleteTodo = (todoId) => {
    const updateTodo = todos.filter((todo, i) => {
      return i !== todoId;
    });
    setTodos(updateTodo);
   
    const updateTodoComplited = todos.filter((todo, i) => {
      return i !== todoId
    })
    setTodos(updateTodoComplited)
  };
  return (
    <>
      <ul className={style.list}>
        {todos.length !== 0 &&
          todos.map(({text, id, completed, date}, i) => {
            return (
              <li
                key={id}
                className={
                  (completed && style.checked) || style.item
                }
              >
                <TodoItem
                  date={date}
                  text={text}
                  index={i}
                  changeTodo={changeTodo}
                  deleteTodo={deleteTodo}
                  todos={todos}
                  setTodos={setTodos}
                />{" "}
              </li>
            );
          })}
      </ul>
      {showModal && (
        <Modal
          context={context}
          currentId={currentId}
          setTodos={setTodos}
          todos={todos}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}
