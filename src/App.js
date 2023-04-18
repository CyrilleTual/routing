import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';

import { Routes, Route } from "react-router-dom";
import Mutualise from './Components/Pages/Mutualise';
import Dedie from './Components/Pages/Dedie';
import Cloud from './Components/Pages/Cloud';
import Connect from './Components/Pages/Connect';




function App() {
  return (
    <React.Fragment>
    <Header />
     <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"mutualise"} element={<Mutualise />} />
                <Route path={"dedie"} element={<Dedie />} />
                <Route path={"cloud"} element={<Cloud />} />
                <Route path={"contact"} element={<Contact />} />   
                <Route path={"connect"} element={<Connect />} />  
    </Routes>
    <Footer />

    </React.Fragment>

  );
}

export default App;
