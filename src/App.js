import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'; 
import Home from './Home'; 
import ContactUs from './ContactUs'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path="/home" element={<Home />} /> 
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

