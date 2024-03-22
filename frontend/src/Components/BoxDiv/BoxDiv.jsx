import React from "react";
import "./BoxDiv.css";

const BoxDiv = ({ heading, para }) => {
  return (
    <div id="boxPart">
      <h2>{heading}</h2>
      <p>{para}</p>
    </div>
  );
};

export default BoxDiv;
