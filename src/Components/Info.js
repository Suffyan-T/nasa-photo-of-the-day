import React from "react";
import "./Info.css";


function Info(props) {
    return (
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>
    );
  }
  
  export default Info;