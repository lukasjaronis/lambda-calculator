import React, {useState} from "react";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers"
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators"
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials"
import "./App.css";

// simply importing

import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {


const [displayValue, setDisplayValue] = useState(0); // default state set to 0. we have a setter and a display-er.

  return (
    <div className="container">
      <Logo />
      <Display displayValue={displayValue}/> 
      <div className="App">
      <Numbers setDisplayValue={setDisplayValue}/>
      <Operators setDisplayValue={setDisplayValue}/>
      <Specials setDisplayValue={setDisplayValue}/>

      </div>
    </div>
  );
}

export default App;

// apps.js where everything comes together to make the APP.