import React from "react";
import "./PaperContainer.css";
const PaperContainer = (props) => {
    return (
        <div className={`paper ${props.noShadow ? "noshadow" : ""}`}>
            {props.children}
        </div>
    );
};

export default PaperContainer;
