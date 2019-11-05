import React from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export const Specials = props => {
  // STEP 2 - add the imported data to state

  return (
    <div>
        {specials.map((special, index) => {
        return (
          <SpecialButton
            key={index}
            special={special}
          />
        )
      })}
    </div>
  );
};

