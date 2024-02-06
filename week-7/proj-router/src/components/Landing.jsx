import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/">Landing</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Landing;
