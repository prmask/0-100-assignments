import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Click to navigate</button>
      <div>
        <Link to="/">Landing</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Dashboard;
