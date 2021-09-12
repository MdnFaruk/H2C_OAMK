import './App.css';
import Clock from './Clock';
import Miles from './Miles';
import Number from './Number';
import StopWatch from './StopWatch';
import { Switch, Route } from 'react-router-dom';
import uuid from 'react-uuid';


function App() {
  const numbers = [];
  for (let i = 1; i <= 7; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  const items = numbers.map((number) =>
  <Number key={uuid()} number={number}></Number>
  )
  return (
    <>
    <Switch>
      <Route path="/" exact />
      <Route path="/" component={Clock} exact />
      <Route path="/stopwatch" component={StopWatch} />
      <Route path="/miles" component={Miles} />
      <Route path="/number" component={Number} />
    </Switch>
    
    {items}
    </>
  );
}

export default App;
