import { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import FetchTodo from "./components/FetchTodo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Wrapper>
        Hello
        <FetchTodo />
      </Wrapper>
    </>
  );
}

export default App;
