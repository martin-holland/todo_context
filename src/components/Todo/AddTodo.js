import React, { useState, useContext } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

import { NotesContext } from "../store/todoStore";

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", task: "" });
  const ctx = useContext(NotesContext);

  const onChangeHandler = (e) => {
    // setTasks(([event.target.name] = event.target.value));
    // console.log(tasks);
    const { name, value } = e.target;

    setTodo((prevState) => ({ ...prevState, [name]: value }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log("form submit works");
    ctx.addTodoItem(todo);
  };

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title" name="title">
          Title
        </label>
        <input onChange={onChangeHandler} type="text" id="title" />
      </div>
      <div>
        <label htmlFor="task" name="task">
          Task
        </label>
        <input onChange={onChangeHandler} type="text" id="task" />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
