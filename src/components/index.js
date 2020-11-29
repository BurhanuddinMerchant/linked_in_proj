import React from "react";
import Navbar from "./Navbar/Navbar";
import Login from "./Main/Auth/Login";
import Register from "./Main/Auth/Register";
const Nav = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Register />
    </>
  );
};
export default Nav;
