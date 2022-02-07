import React, { useState } from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";

const AddTodo = ({ addHandler }) => {
  const [todo, setTodo] = useState({ title: "", task: "" });
  const onChangeHandler = (event) => {
    // setTasks(([event.target.name] = event.target.value));
    // console.log(tasks);
    const { name, value } = event.target;

    setTodo((prevState) => ({ ...prevState, [name]: value }));

    console.log(todo);
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
