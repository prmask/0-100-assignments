import { useState, useRef } from "react";
import styles from "./ParaGenerator.module.css";

const ParaGenerator = () => {
  const [paragraphLength, setParagraphLength] = useState(0);

  // const myRef = useRef(null);

  const inputChangeHandler = (e) => {
    setParagraphLength(e.target.value);
  };

  const generateParagraph = () => {
    // setParagraphLength(document.getElementById("paraLength").value);
    // console.log(myRef.current);
    // setParagraphLength(myRef.current);
    // myRef.current.innerHTML = paragraphLength;
    const loremIpsum =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const words = loremIpsum.split(" ");

    let paraToDisplay = "";

    for (let i = 0; i < paragraphLength; i++) {
      const word = words[i % words.length];
      paraToDisplay += word + " ";
    }
    console.log({ paraToDisplay });
    if (paraToDisplay !== "") {
      document.getElementById("paragraph").innerHTML =
        paraToDisplay.trim() + ".";
    }
  };

  // console.log(generateParagraph());
  return (
    <div className={styles.paraGenerator}>
      <h1>Para Generator</h1>
      <div className={styles.paraInput}>
        <input
          id={styles.paraLength}
          name="paraLength"
          type="number"
          placeholder="Enter Number of Words"
          onChange={inputChangeHandler}
          // ref={myRef}
          // value={paragraphLength === 0 ? "" : paragraphLength}
        />
        <input
          id={styles.submit}
          type="submit"
          value="Generate"
          onClick={generateParagraph}
        />
      </div>
      <div id="paragraph"></div>
    </div>
  );
};

export default ParaGenerator;
