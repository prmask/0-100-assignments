import { useEffect, useState } from "react";
import axios from "axios";

const useTodos = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
};

const DataFetchingHook = () => {
  const { todos, loading } = useTodos(5);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo, index) => <Track key={index} todo={todo} />)
      )}
    </>
  );
};

const Track = ({ todo }) => {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
};

export default DataFetchingHook;
