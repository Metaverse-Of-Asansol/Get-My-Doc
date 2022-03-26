import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<SignIn/>} />
      </Routes>
    </>
  );
};

export default Routers;
