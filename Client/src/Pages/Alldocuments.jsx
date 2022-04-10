import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Base from "../Base";
import axios from "axios";
import "./Styles/Alldocuments.css";

const Alldocuments = () => {
  let navigate = useNavigate();
  let loation = useLocation();
  const [tag, setTag] = useState("");
  const [docs, setDocs] = useState([]);

  async function tokenCheker() {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      navigate("/");
    }
  }

  async function getDocuments() {
    let pathName = loation.pathname;
    let pathArray = pathName.split("/");
    console.log(pathArray);
    setTag(pathArray[2].replaceAll("%20", " "));

    console.log("Fetch Data");
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(
      `/api/v1/getdocs/${pathArray[2].replaceAll("%20", " ")}`,
      {
        withCredentials: true,
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    setDocs(data.docs);
    console.log("Doc Data : ", data);
  }

  useEffect(() => {
    getDocuments();
    tokenCheker();
  }, []);

  return (
    <Base>
    <main className="main_section AllDocs_main">
      <div className="All_doc_head">
        <h1>All Document Related To {tag}</h1>
        Here all the documents of specific tag will be displayed
      </div>

        {console.log(docs)}
        {docs.map((doc, index) => {
          return (
            <Link key={index} to={`/doc/${doc._id}`}>
              <div>
                <span>
                  <h4>{doc.docTitle}</h4> <code>{doc.docTags}</code>
                </span>
              </div>
            </Link>
          );
        })}
        <form>
          <Link to={`/docs/${tag}/createDocument`}>
            <button className="btn C_doc_btn">Create Document</button>
          </Link>
        </form>
      </main>
    </Base>
  );
};

export default Alldocuments;
