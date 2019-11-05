import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";



const Numbers = props => {
const [numberState] = useState(numbers);
  return (
    <div>
{
  numberState.map((number, index) => (
    <NumberButton key={index} number={number}/>
  ))
}
    </div>
  );
};

export default Numbers;