import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Aboutus from "./Pages/Aboutus";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Creaetag from "./Pages/Creaetag";
import Alldocuments from "./Pages/Alldocuments";
import Createdocument from "./Pages/Createdocument";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<SignIn/>} />
        {/* Secure Routes */}
        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/createtag" element={<Creaetag/>} />
        <Route path="/tagblock/:tagname" element={<Alldocuments/>} />
        
        <Route path="/docs/:tagname/createDocument" element={<Createdocument/>} />
      </Routes>
    </>
  );
};

export default Routers;
