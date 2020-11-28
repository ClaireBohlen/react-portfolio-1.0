import './css/App.css';
import About from "./components/About";
import Connect from "./components/Connect";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        {/* <Home/>
        <Projects/>
        <About/>
        <Connect/> */}
      </Router>

    </>
    
  );
}

export default App;
