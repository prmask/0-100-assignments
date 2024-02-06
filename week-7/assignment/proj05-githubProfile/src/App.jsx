import { useState, useEffect } from "react";
import "./App.css";
import { Profile } from "./components/Profile";

function App() {
  const profileInfo = {
    name: "Ratna Sharma",
    age: "15",
    location: "New Delhi, IN",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    socialMedia: {
      followers: 80000,
      likes: 5600000,
      photos: 2300,
    },
  };

  // const GithubInfoCard = ({ username }) => {
  let username = "prmask";
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch Github data");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, [username]);
  // };

  // GithubInfoCard("prmask");
  return (
    <div>{userData ? <Profile pinfo={userData} /> : <p>Loading...</p>}</div>
  );
}

export default App;
