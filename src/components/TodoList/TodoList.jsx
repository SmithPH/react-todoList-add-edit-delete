import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const todoList = props.todoList;
  const currentYear = props.currentYear;
  const filteredTodos = todoList.filter(
    (t) => t.dueDate.getFullYear() === Number(currentYear)
  );


  let listItem = <div>Not found</div>;

  if (currentYear === "ALL") {
    listItem = todoList.map((e) => (
      <TodoItem
        deleteHandler={props.deleteHandler}
        editHandler={props.editHandler}
        key={e.id}
        id={e.id}
        task={e.task}
        isFinished={e.isFinished}
        dueDate={e.dueDate}
      />
    ));
  }
  if (filteredTodos.length > 0) {
    listItem = filteredTodos.map((e) => (
      <TodoItem
        deleteHandler={props.deleteHandler}
        editHandler={props.editHandler}
        key={e.id}
        id={e.id}
        task={e.task}
        isFinished={e.isFinished}
        dueDate={e.dueDate}
      />
    ));
  }
  return <div className="tdl-container">{listItem}</div>;
}

export default TodoList;
