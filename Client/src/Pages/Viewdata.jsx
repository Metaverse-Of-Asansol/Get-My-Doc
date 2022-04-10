import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Base from "../Base";
import axios from "axios";

const Viewdata = () => {
  const [Userdoc, setUserdoc] = useState({});
  let loation = useLocation();
  const getData = async () => {
    console.log(location.pathname.split("/")[2]);
    const authToken = localStorage.getItem("token");
    const { data } = await axios.get(
      `/api/v1/getdocument/${location.pathname.split("/")[2]}`,
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
      <h1>{Userdoc.docTitle}</h1>
      <h2>{Userdoc.docId}</h2>
      <h1>
        <code>{Userdoc.docTags}</code>
      </h1>
      <div>
        <p>{Userdoc.additionalInfo}</p>
      </div>
      <img src={Userdoc.docLink} alt="" />
    </Base>
  );
};

export default Viewdata;
