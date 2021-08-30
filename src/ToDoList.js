import React from "react";
import ToDo from "./ToDo.js";

const ToDoList = ({ ToDoList, setToDoList, filteredToDos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            todo={todo}
            ToDoList={ToDoList}
            setToDoList={setToDoList}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
