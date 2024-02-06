import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">Landing</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Contact;
