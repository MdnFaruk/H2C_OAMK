import './App.css';
import {Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';



function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
