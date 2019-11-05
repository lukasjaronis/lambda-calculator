import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number_buttons">
      {props.number}
    </button>
  );
};

export default NumberButton;