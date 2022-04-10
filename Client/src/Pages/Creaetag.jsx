import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base from "../Base";
import "./Styles/Createtag.css"

const Creaetag = () => {
  const [tag, setTag] = useState("");
  let navigate = useNavigate();

  function handelChange(e) {
    setTag(e.target.value);
  }

  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      navigate("/");
    }
  }

  async function submit(e) {
    e.preventDefault();
    const tagName = tag;
    const authToken = localStorage.getItem("token");
    const  {data}  = await axios.post("/api/v1/addtag", {tag : tagName}, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });

    if(data.success) {
        console.log("New Tag Created");
        navigate("/dashboard")
    }else{
        setTag("")
    }
    console.log("User Data Submitted", tagName);
    console.log("Entire API data : ", data);
  }

  //   console.log(tag);

  useEffect(() => {
    tokenCheker();
  }, []);

  return (
    <Base>
    <main className="main_section C_docs_section">
      <h1>Create A New Tag</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          className="C_doc_inputs"
          type="text"
          name="tag"
          id="tag"
          value={tag}
          onChange={(e) => handelChange(e)}
          placeholder="Create a new Tag"
          required
        />
        <button className="btn C_tag_btn" type="submit">
          Create Tag
        </button>
      </form>
      </main>
    </Base>
  );
};

export default Creaetag;
