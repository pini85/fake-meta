import React from "react";
import api from "./api";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogin = () => {
    api.get("login", { withCredentials: true });
  };
  return (
    <>
      <h1>PLEASE LOGIN</h1>
      <button onClick={handleLogin}>Login</button>
      <Link to="/admin">go to admin</Link>
    </>
  );
};
export default Home;
