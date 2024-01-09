import { useEffect, useState } from "react";
import "./App.css";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: counter++, title: Math.random(), description: Math.random() },
    ]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <TodoComp
          title={todo.title}
          description={todo.description}
          key={todo.id}
        />
      ))}
    </div>
  );
}

const TodoComp = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const TodoCompById = ({ id }) => {
  const json = "";
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todos?id=${id}`).then(
      async (res) => {
        json = await res.json();
        // setTodos(json.todos);
      }
    );
  }, []);

  return (
    <div>
      <h2>{json.todos.title}</h2>
      <p>{json.todos.description}</p>
    </div>
  );
};

export default App;
