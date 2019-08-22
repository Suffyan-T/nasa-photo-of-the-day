import React from "react";

function Card(props) {
    return (
      <div className="Card">
      <img src={props.img} alt={props.alt}></img>
      </div>
    );
  }
  
  export default Card;
  