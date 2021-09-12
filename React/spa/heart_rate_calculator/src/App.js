import './App.css';
import {useState} from 'react';
import AnimatedNumber from "animated-number-react";
import $ from 'jquery';

function App() {
  const [age, setAge] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimt, setUpperLimt] = useState(0);

  function calculate(e) { 
    e.preventDefault();
    let upperLimt = 0;
    let lowerLimit = 0;
    upperLimt = (220 - age) * 0.85;
    lowerLimit = (220 -age) * 0.65; 
    setLowerLimit( lowerLimit);
    setUpperLimt( upperLimt);
    
  }
  const formatValue = (value) => value.toFixed(1);
  $("button").click(function(){
    $("output").removeClass("myDIV");
    $("output").addClass("myDIV");
  });

  $(".age").focusin(function(){
    $("output").removeClass("myDIV");
    
  });
  return (
    <form onSubmit={calculate} className="container block">
      <label class="form-label">Age</label>
      <input type="number"  class="form-control age" value={age} onChange={e => setAge(e.target.value)} />
      <label class="form-label">Heart rate limits</label>
      <output  class="form-control mb-3">
        <AnimatedNumber className="number" value={lowerLimit} formatValue={formatValue}/>-
        <AnimatedNumber className="number" value={upperLimt} formatValue={formatValue}/>
      </output>
      <button type="submit" class="btn btn-primary">Calculate</button>
    </form>
  );
  
}

  


export default App;
