import React, {useState, useEffect} from "react";
import "./Styles/Tags_boxes.css";

const Tags_boxes = ({tagName, tagImg}) => {
    
    return(
        <>
            <div className="tag_box">
                <div className="icon">
                    <img src={tagImg} alt="image" />
                </div>
                <p className="tag_name">
                    {tagName}
                </p>

            </div>
        </>
    )
}

export default Tags_boxes;