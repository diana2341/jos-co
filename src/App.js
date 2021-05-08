import logo from './logo.svg';
import './App.css';
import NavbarComponent from'./components/navbarComponent'
import About from'./components/about'
import Contact from'./components/contact'
import Home from'./components/home'
import Footer from'./components/Footer'
import React from 'react'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
function App() {
  const [work, setWork] = React.useState('');

  return (
    <div className="App">
      {/* <NavbarComponent  setWork={setWork}/> */}
      <Router>
          <Route exact render={(props) => <NavbarComponent setWork={setWork}routerProps={props}/>} />
          <Route exact path="/" render={(props) => <Home routerProps={props}/>} />
          <Route exact path="/services" render={(routerProps) => <About work={work}/>} />
          <Route exact path="/contact" render={(props) => <Contact/>} />
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
