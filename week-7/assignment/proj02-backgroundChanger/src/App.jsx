import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("gold");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="buttonList">
      <Button color="#FF0000" btnText="Red" onClick={changeBackground} />
      <Button color="#FFFF00" btnText="Yellow" onClick={changeBackground} />
      <Button color="#000000" btnText="Black" onClick={changeBackground} />
      <Button color="#800080" btnText="Purple" onClick={changeBackground} />
      <Button color="#008000" btnText="Green" onClick={changeBackground} />
      <Button color="#0000FF" btnText="Blue" onClick={changeBackground} />
      <Button color="#FFD700" btnText="Gold" onClick={changeBackground} />
    </div>
  );
}

export default App;
