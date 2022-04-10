import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Base from "../Base";

const Alldocuments = () => {
  let navigate = useNavigate();
  let loation = useLocation();
  const [title, setTitle] = useState("");

  async function tokenCheker() {
    //   console.log(loation.pathname);
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      navigate("/");
    }
  }

  useEffect(() => {
    let pathName = loation.pathname;
    let pathArray = pathName.split("/");
    console.log(pathArray);
    setTitle(pathArray[2].replace("%20", " "));
    tokenCheker();
  }, []);

  return (
    <Base>
      <h1>All Document Related To {title}</h1>

      Here all the documents of specific tag will be displayed
      <form>
        <Link to={`/docs/${title}/createDocument`}>
          <button className="btn">Create Document</button>
        </Link>
      </form>
    </Base>
  );
};

export default Alldocuments;
