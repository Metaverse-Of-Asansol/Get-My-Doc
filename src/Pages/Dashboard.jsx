import React, { useState, useEffect } from "react";
import Base from "../Base";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {Api} from "../backend"
import Tags_boxes from "../Components/Tags_boxes";
import "./Styles/Dashboard.css"
import folder from "../../assets/folder1.png"

const Dashboard = () => {
  const [tags, setTags] = useState([]);
  let navigate = useNavigate();

  const getAllTags = async () => {
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(`${Api}getalltags`, {
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
        <main className="main_section Dashboard_main">
        <h1 className="dashboard_header">My Documents</h1>
        <div className="tags_wrapper_div">
        {tags.map((tag, index) => {
          return (
              <Link key={index} style={{textDecoration : "none"}} to={`/tagblock/${tag}`}>
                <Tags_boxes tagName={tag} tagImg={folder}/>
              </Link>
          );
        })}
        </div>

        <div className="create_btn_wrapper">
          <Link to="/createtag">
            <button className="btn create_btns">Create A New Tag</button>
          </Link>
          
          <Link to="/docs/createdoc">
            <button className="btn create_btns">Create A Document</button>
          </Link>
        </div>
        </main>
      </Base>
    </>
  );
};

export default Dashboard;
