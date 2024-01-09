import React from "react";

const TodoComp = (props) => {
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <div>
            <span className="title">{todo.title}</span>
            {" > "}
            <span className="description">{todo.description}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoComp;
