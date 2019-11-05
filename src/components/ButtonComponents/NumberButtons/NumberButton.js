import React from "react";
import "./style.css";

const NumberButton = (props) => {
  return (
    <button className="numberbtns"
    onClick={() => props.setDisplayValue(props.number)}
    
    >
      {props.number}
    </button>
  );
};

export default NumberButton;