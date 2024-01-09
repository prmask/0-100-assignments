import React from "react";

export const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div>
            <span
              style={{
                padding: 15,
                margin: 15,
              }}
            >
              {`${todo.title} &nbsp; ${todo.description} `}
            </span>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </>
  );
};
