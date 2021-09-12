import {useState,useEffect} from 'react'

const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=29664eb5668f20c2a62d1e6d28da2900'

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => { 
    fetch(URL)
    .then(res => res.json())
    .then ((result) =>{
      setRate(result.rates.GBP);
      setIsLoading(false);
    }, (error) => {
      setError(error);
      setIsLoading(false);
      setRate(0);
    })
    
  }, [])

  function calculate(e) {
    e.preventDefault();
    const conversion = eur * rate;
    setGbp(conversion);
  }
  if (isLoading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error</p>
  } else {
    return (
      <div>
        <form onSubmit={calculate}>
          <label> Euro</label>
          <input type="number" step="0.1" value={eur} onChange={e => setEur(e.target.value)}/>
          <label> Rate</label>
          <output>{rate}</output>
          <div>
            <label> Gbp</label>
            <output>{gbp}</output>
          </div>
          <div>
            <button>Calculate</button>
          </div>
        
        </form>
      </div>
  
);
  }
  
}

export default App;
