import React from 'react';

import './App.css';
import Header from './Components/Header.jsx';
import Home from './Pages/Home/Index.jsx';
import Contact from './Pages/Contact/Index';
import Footer from './Components/Footer';

import { Routes, Route } from "react-router-dom";
import Shared from './Pages/Shared/Shared.jsx';
import Dedicated from './Pages/Dedicated/Index.jsx';
import Cloud from './Pages/Cloud/Index.jsx';
import Connect from './Pages/Connect/Index.jsx';


function App() {
  return (
    <React.Fragment>

      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"mutualise"} element={<Shared />} />
          <Route path={"dedie"} element={<Dedicated />} />
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
