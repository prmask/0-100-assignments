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

  return (
    <div>
      <Profile pinfo={profileInfo} />
    </div>
  );
}

export default App;
