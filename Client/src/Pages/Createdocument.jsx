import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Base from "../Base";

const Createdocument = () => {
  const [tags, setTags] = useState([]);
  let loation = useLocation();
  const [registerdata, setRegisterdata] = useState({
    docId: "",
    docTitle: "",
    docTag: "",
    additionalInfo: "",
  });
  let navigate = useNavigate();
  let pathName = loation.pathname;
  let pathArray = pathName.split("/");
  let resultantstring = pathArray[2].replaceAll("%20", " ");

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

  console.log(registerdata);

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
  }

  async function submit(e) {
    e.preventDefault();
    console.log("User Data Submitted");
    let pathName = loation.pathname;
    let pathArray = pathName.split("/");
    let resultantstring = pathArray[2].replaceAll("%20", " ");
    const userData = {
      docId: registerdata.docId,
      docTitle: registerdata.docTitle,
      docTags: resultantstring,
      additionalInfo: registerdata.additionalInfo,
    };
    const authToken = localStorage.getItem("token");
    const { data } = await axios.post("/api/v1/addDocument", userData, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log(data);
    if (data.success) {
      console.log("User document added successfully : ", data);
      navigate(`/tagblock/${resultantstring}`);
    } else {
      console.log("Something went Wrong :", data);
      setRegisterdata({
        docId: "",
        docTitle: "",
        additionalInfo: "",
      });
    }
  }

  useEffect(() => {
    console.log("Path Arrray", resultantstring);
    tokenCheker();
    getAllTags();
  }, []);

  return (
    <Base>
      <h1>Create New Document For {resultantstring}</h1>
      Page for creating new document based on specifis TAG
      <form onSubmit={(e) => submit(e)}>
        <div>
          <input
            type="text"
            name="docId"
            id="docId"
            value={registerdata.docId}
            onChange={(e) => handelChange(e)}
            placeholder="Document Id"
          />
        </div>

        <div>
          <input
            type="text"
            name="docTitle"
            id="docTitle"
            value={registerdata.docTitle}
            onChange={(e) => handelChange(e)}
            placeholder="Document Title"
          />
        </div>

        {/* <div>
          <select
            name="docTag"
            id="docTag"
            value={registerdata.docTag}
            onChange={(e) => handelChange(e)}
          >
            <option selected hidden>
              Choose your branch
            </option>
            {tags.map((tag, index) => {
              return (
                <option key={index} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
        </div> */}

        <div>
          <input
            type="text"
            name="additionalInfo"
            id="additionalInfo"
            value={registerdata.additionalInfo}
            onChange={(e) => handelChange(e)}
            placeholder="Additional Information"
          />
        </div>
        <button className="btn" type="submit">
          Create Document
        </button>
      </form>
    </Base>
  );
};

export default Createdocument;
