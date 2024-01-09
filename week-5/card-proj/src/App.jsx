// import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  const personData = {
    name: "Prem Asok",
    description: "React.js, Node.js, Next.js coder",
    intrests: ["Football", "Movies", "Travelling"],
    socialMedia: {
      Twitter: "www.twitter.com",
      Facebook: "www.facebook.com",
      Likedin: "www.linkedin",
      Github: "www.github.com",
    },
  };

  return (
    <div className="App">
      <Card personData={personData} />
    </div>
  );
}

export default App;
