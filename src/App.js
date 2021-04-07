import logo from './logo.svg';
import './App.css';
import NavbarComponent from'./components/navbarComponent'
import About from'./components/about'
import Contact from'./components/contact'
import Home from'./components/home'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Router>
          <Route exact path="/" render={(props) => <Home routerProps={props}/>} />
          <Route exact path="/about" render={(props) => <About/>} />
          <Route exact path="/contact" render={(props) => <Contact/>} />
        </Router>
    </div>
  );
}

export default App;
