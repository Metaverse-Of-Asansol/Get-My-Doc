import React, {useState, useEffect} from "react";
import imgUrls from "../../assets/tag_Images_urls";
import folder from "../../assets/folder1.png"
import "./Styles/Tags_boxes.css";

const Tags_boxes = ({tagName}) => {
    
    return(
        <>
            <div className="tag_box">
                <div className="icon">
                    <img src={folder} alt="image" />
                </div>
                <p className="tag_name">
                    {tagName}
                </p>

            </div>
        </>
    )
}

export default Tags_boxes;