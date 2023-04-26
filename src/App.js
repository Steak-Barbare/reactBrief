import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages';
import Recettes from './Pages/Recettes';
import Contact from './Pages/Contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Recettes' element={<Recettes/>} />  
    </Routes>
    </Router>
);
}
  
export default App;