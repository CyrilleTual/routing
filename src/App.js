import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

import { Routes, Route } from "react-router-dom";
import Mutualise from './Pages/Mutualise';
import Dedie from './Pages/Dedie';
import Cloud from './Pages/Cloud';
import Connect from './Pages/Connect';


function App() {
  return (
    <React.Fragment>

      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"mutualise"} element={<Mutualise />} />
          <Route path={"dedie"} element={<Dedie />} />
          <Route path={"cloud"} element={<Cloud />} />
          <Route path={"contact"} element={<Contact />} />   
          <Route path={"connect"} element={<Connect />} />  
      </Routes>

      </main>
      
      <Footer />

    </React.Fragment>

  );
}

export default App;
