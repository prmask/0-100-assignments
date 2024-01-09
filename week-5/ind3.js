import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}

function Button(props) {
  function onButtonClick() {
    props.setCount(count + 1);
  }

  return React.createElement(
    "button",
    { onClick: onButtonClick },
    `Counter ${props.count}`
  );
}

export default App;
