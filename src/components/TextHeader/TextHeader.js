import React from "react";
import "./TextHeader.css";

const TextHeader = ({ text }) => {
    return (
        <div className="text-header-highlight">
            <p className="text-header">{text}</p>
        </div>
    );
};

export default TextHeader;
