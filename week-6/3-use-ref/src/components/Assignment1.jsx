import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const textFocusRef = useRef(null);

  useEffect(() => {
    const textElement = textFocusRef.current;

    if (textElement) {
      textElement.focus();
    }
  }, []);

  const handleButtonClick = () => {
    const textElement = textFocusRef.current;

    if (textElement) {
      textElement.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={textFocusRef} placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
