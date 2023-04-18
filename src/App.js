import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer';

import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <React.Fragment>
    <Header />
     <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"contact"} element={<Contact />} />
    </Routes>
    <Footer />

    </React.Fragment>

  );
}

export default App;
