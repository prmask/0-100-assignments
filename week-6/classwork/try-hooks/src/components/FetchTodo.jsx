import React, { useEffect, useState } from "react";
import TodoComp from "./TodoComp";

const FetchTodo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `Click no. ${count}`;
  }, [count]);

  useEffect(() => {
    try {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click no.: {count}</button>
      <TodoComp todos={todos} />
    </div>
  );
};

export default FetchTodo;
