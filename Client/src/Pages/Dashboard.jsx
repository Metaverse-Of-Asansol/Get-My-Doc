import React, { useState, useEffect } from "react";
import Base from "../Base";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [tags, setTags] = useState([]);
  let navigate = useNavigate();

  const getAllTags = async () => {
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get("/api/v1/getalltags", {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log("All Tags : ", { data });
    setTags(data.tags);
  };

  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      navigate("/");
    }
  }

  useEffect(() => {
    tokenCheker();
    getAllTags();
  }, []);

  return (
    <>
      <Base>
        {console.log(tags)}
        <h1>Dashboard</h1>
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <Link to={`/tagblock/${tag}`}>
                <h4>{tag}</h4>
              </Link>
            </div>
          );
        })}

        <Link to="/createtag">
          <button className="btn">Create A New Tag</button>
        </Link>
        
        <Link to="/docs/createdoc">
          <button className="btn">Create A Document</button>
        </Link>
      </Base>
    </>
  );
};

export default Dashboard;
