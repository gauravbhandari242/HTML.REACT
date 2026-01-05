import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 import Home from './Components/Home';
 import About from './Components/About';
 import Contact from './Components/Contact';
 
import  './App.css';

function App() {
  return (
    <Router>
      
        <nav>
        <div className='page'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>s
            <li><Link to="/US" >US</Link></li>
          </ul>
        

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/US" element={<US/>}/>
          <Route path="*" render={() => <h2> Page Not Found</h2>} />
        </Routes>
      

     
    
    </div>
    </nav>
    </Router>
  );
}

export default App;
