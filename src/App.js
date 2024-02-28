import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Project from './Components/Pages/projects/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Project/>} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
