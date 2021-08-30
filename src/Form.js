import React from 'react';

const Form = ({setInput, setToDoList, ToDoList, input, setStatus}) => {

  const inputHandler = e => {
    setInput = e.target.value;
  }

  const submitHandler = e => {
    e.preventDefault();
    setToDoList = ([... ToDoList, {text: input, completed: false, id: Math.random()*1000}]);
    setInput('');
  }
  const statusHandler = (e) => {
      setStatus= e.target.value;
  }
    return(
        <form>
      <input value={input} type="text" className="todo-input" onChange={inputHandler} />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select" onChange={statusHandler}>
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

export default Form;