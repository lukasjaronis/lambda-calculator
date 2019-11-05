import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";



export const Numbers = props => {
const [numberState] = useState(numbers);
  return (
    <div>
{
  numberState.map((number, index) => 
  
  (<NumberButton 
    key={index} 
    number={number}
    setDisplayValue={props.setDisplayValue}
    />)
  )
}
    </div>
  );
};



// this is the parent. (we dont need to export default the parent, just export the function)