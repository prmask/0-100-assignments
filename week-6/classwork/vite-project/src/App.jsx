import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Header 0");

  const updateTitle = () => {
    setTitle("My name is " + Math.random());
  };

  return (
    <>
      <button onClick={updateTitle}>Update the title </button>
      <Header title={title} />
      {/* <HeaderWithButton /> */}
      <Header title="Header 1" />
      <Header title="Header 2" />
      <Header title="Header 3" />
      <Header title="Header 4" />
      <Header title="Header 5" />
      <Header title="Header 6" />
    </>
  );
}

const Header = React.memo(({ title }) => {
  return <div>{title}</div>;
});

// const HeaderWithButton = () => {
//   const [title, setTitle] = useState("Header 0");

//   const updateTitle = () => {
//     setTitle("My name is " + Math.random());
//   };

//   return (
//     <>
//       <button onClick={updateTitle}>Update the title </button>
//       <Header title={title}></Header>
//     </>
//   );
// };

export default App;
