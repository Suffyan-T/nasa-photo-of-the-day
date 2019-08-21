import React from "react";
import "./Info.css";


function Info(props) {
    return (
      <div className="info">
        <h3>{props.title}</h3>
      </div>
    );
  }
  
  export default Info;