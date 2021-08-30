import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Form from "./Form.js";
import ToDoList from "./ToDoList.js";

const App = () => {
  const [input, setInput] = useState('');
  const [ToDoList, setToDoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(()=>{
    getLocalToDos();
  }, []);

  useEffect(() => {
    saveLocalToDos();
    handleFilters();
  }, [ToDoList, status]);

  const handleFilters = () => {
    switch (status) {
      case "completed":
        setFilteredToDos(ToDoList.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(ToDoList.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(ToDoList);
        break;
    }
  };

  const saveLocalToDos = () =>{
    localStorage.setItem("ToDoList", JSON.stringify(ToDoList))
  }

  const getLocalToDos = () => {
    if(localStorage.getItem('ToDoList') === null) {
      localStorage.setItem("ToDoList", JSON.stringify([]))
    }
    else {
      let toDoLocal = JSON.parse(localStorage.getItem('ToDoList'))
      setToDoList(toDoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>React to do list App</h1>
      </header>
      <Form
        ToDoList={ToDoList}
        setToDoList={setToDoList}
        setInput={setInput}
        input={input}
        setStatus={setStatus}
      />
      <ToDoList
        ToDoList={ToDoList}
        setToDoList={setToDoList}
        filteredToDos={filteredToDos}
      />
    </div>
  );
}

export default App;