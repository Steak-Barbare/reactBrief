import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Recettes from './Pages/Recettes';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Components/Footer';


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<About />} />
        <Route exact path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Recettes' element={<Recettes/>} />  
    </Routes>
    <Footer />
    </Router>
    
);
}

export default App;