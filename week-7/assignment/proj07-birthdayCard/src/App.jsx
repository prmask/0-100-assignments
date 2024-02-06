import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log({ name });
  }, [name]);

  const generateBirthdayCards = () => {
    const inputValue = document.getElementsByName("name1")[0];

    const value = inputValue.value;

    if (value !== undefined) {
      setName(value);
    }

    const birthdayCardsContainer = document.getElementById("birthdayCards");

    // if (birthdayCardsContainer) {
    // Clear previous cards
    birthdayCardsContainer.innerHTML = "";
    console.log("2> ", { name });
    if (name.trim() !== "") {
      // Sample birthday cards
      const birthdayCards = [
        `<div class="card">Happy Birthday, ${name}! 🎉🎂</div>`,
        `<div class="card">Wishing ${name} a fantastic birthday celebration! 🎈🎁</div>`,
        `<div class="card">May your birthday be filled with joy and laughter, ${name}! 🥳🎊</div>`,
      ];
      console.log({ birthdayCards });
      // Render the cards
      birthdayCards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = card;
        birthdayCardsContainer.appendChild(cardElement);
      });
      // }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Enter Your Name</h1>
        <input
          type="text"
          id={styles.name}
          name="name1"
          placeholder="Recipient's Name"
        />
        <input
          type="button"
          onClick={generateBirthdayCards}
          value="Generate Birthday Cards"
        />
      </div>
      <div id="birthdayCards"></div>
    </div>
  );
}

export default App;
