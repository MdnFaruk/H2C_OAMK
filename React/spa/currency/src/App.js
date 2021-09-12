import './App.css';
import {useState} from 'react';



function App() {

const [eur, setEur] = useState(0);
const [gbp, setGbp] = useState(0);

function calculate(e) { 
  e.preventDefault();
  const result = eur * 0.9;
  setGbp(result);
}

  return (
    <div>
      <form onSubmit={calculate}>
     <h3>Currency Calculator</h3>
     <label> Euro</label>
     <input type="number" step="0.1" value={eur} onChange={e => setEur(e.target.value)}/>
     <label> Gbp</label>
     <output>{gbp}</output>
     <button>Calculate</button>
     </form>
    </div>
  );
}

export default App;
