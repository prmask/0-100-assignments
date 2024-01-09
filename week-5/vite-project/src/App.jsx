import { useState } from "react";
import "./App.css";
// import { preprocessCSS } from "vite";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Buttonss count={count} setCount={setCount} />
    </div>
  );
}

function Buttonss(props) {
  const onClickHandler = () => {
    props.setCount(props.count + 1);
  };
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
