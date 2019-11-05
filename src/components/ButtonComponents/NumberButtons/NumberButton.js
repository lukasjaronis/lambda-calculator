import React from "react";
import "./style.css";

const NumberButton = (props) => {
  return (
    <button className="numberbtns" // classname here just for styles
    onClick={() => props.setDisplayValue(props.number)} // an onclick butgton empty function for setting the number and displaying that number.
    
    >
      {props.number}
    </button>
  );
};

export default NumberButton;

// this is the child (we export the childs)