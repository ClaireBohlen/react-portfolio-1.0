import './css/App.css';
import About from "./components/About";
import Connect from "./components/Connect";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Connect/>

    </div>
    
  );
}

export default App;
