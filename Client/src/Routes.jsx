import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Aboutus from "./Pages/Aboutus";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default Routers;
