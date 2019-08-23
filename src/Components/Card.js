import React from "react";
import "./Card.css";

function Card(props) {
    return (
      <div className="Card">
      <img src={props.img} alt={props.alt}></img>
      </div>
    );
  }
  
  export default Card;
  