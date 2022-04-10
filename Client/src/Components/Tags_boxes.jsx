import React, {useState, useEffect} from "react";
import imgUrls from "../../assets/tag_Images_urls";
import "./Styles/Tags_boxes.css";

const Tags_boxes = ({tagName}) => {
    
    return(
        <>
            <div className="tag_box">
                <div className="icon">
                    <img src={imgUrls.name === tagName && imgUrls.url} alt="image" />
                </div>
                <p className="tag_name">
                    {tagName}
                </p>

            </div>
        </>
    )
}

export default Tags_boxes;