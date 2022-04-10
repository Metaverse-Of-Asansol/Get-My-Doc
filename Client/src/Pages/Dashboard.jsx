import React, { useState, useEffect} from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();

  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      navigate("/");
    }
  }

  useEffect(() => {
    tokenCheker()
  }, [])

  return (
    <>
      <Base>
        <h1>Dashboard</h1>
      </Base>
    </>
  );
};

export default Dashboard;
