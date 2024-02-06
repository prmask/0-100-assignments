const Button = ({ color, btnText, onClick }) => {
  function isColorDark(color) {
    // Hex to RGB conversion
    let r, g, b;

    if (color.startsWith("#")) {
      r = parseInt(color.slice(1, 3), 16);
      g = parseInt(color.slice(3, 5), 16);
      b = parseInt(color.slice(5, 7), 16);
    } else {
      // Parse color in other formats (e.g., rgb(), rgba(), etc.)
      const match = color.match(/\(([^)]+)\)/);
      if (match) {
        const rgbValues = match[1]
          .split(",")
          .map((val) => parseInt(val.trim()));
        [r, g, b] = rgbValues;
      }
    }

    // Calculate brightness using the formula: 0.299*R + 0.587*G + 0.114*B
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // Check if the color is dark based on brightness
    return brightness < 128; // You can adjust the threshold as needed
  }

  const btnTextColor = isColorDark(color) ? "white" : "black";

  const buttonStyle = {
    padding: "10px 30px",
    backgroundColor: color,
    color: btnTextColor,
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "16px",
    display: "inline-block",
    margin: "5px 10px",
    border: 0,
  };

  return (
    <button style={buttonStyle} type="button" onClick={() => onClick(color)}>
      {btnText}
    </button>
  );
};

export default Button;
