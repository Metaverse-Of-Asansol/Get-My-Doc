import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Base from "../Base";
import axios from "axios";
import {Api} from "../backend"
import "./Styles/Viewdata.css";

const Viewdata = () => {
  const [Userdoc, setUserdoc] = useState({});
  let loation = useLocation();
  const getData = async () => {
    console.log(location.pathname.split("/")[2]);
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(
      `${Api}getdocument/${location.pathname.split("/")[2]}`,
      {
        withCredentials: true,
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    console.log("Data Parsed : ", data);
    setUserdoc(data.docs);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Base>
      {console.log(Userdoc)}
      <main class="main_section">
      <div className="all_doc_details">
      <div className="doc_details">
      <h1>Name : {Userdoc.docTitle}</h1>
      <h2>ID : {Userdoc.docId}</h2>
      <h1>
        <code>Tag : {Userdoc.docTags}</code>
      </h1>
      <div>
        <p>Details : {Userdoc.additionalInfo}</p>
      </div>
      </div>
      <div className="doc_img">
      <img src={Userdoc.docLink} alt="" />
      </div>
      </div>
      </main>
    </Base>
  );
};

export default Viewdata;
