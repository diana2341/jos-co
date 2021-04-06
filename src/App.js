import logo from './logo.svg';
import './App.css';
import NavbarComponent from'./components/navbarComponent'
import Home from'./components/home'

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
    </div>
  );
}

export default App;
