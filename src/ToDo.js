import React from "react";

const ToDo = ({ text, todo, ToDoList, setToDoList }) => {
  const deleteHandler = () => {
    setToDoList(ToDoList.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setToDoList(
      ToDoList.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </div>
  );
};

export default ToDo;
