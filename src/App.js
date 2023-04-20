import React from 'react';

import './App.css';
import Header from './Components/Header.jsx';
import Home from './Pages/Home/Index.jsx';
import Contact from './Pages/Contact/Index';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import Connect from './Pages/Connect/Index.jsx';
import Hosting from './Pages/Hosting/Index';


function App() {
  return (
    <React.Fragment>

      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"contact"} element={<Contact />} />   
          <Route path={"connect"} element={<Connect />} />

          <Route path={"dedie"} 
                element={ 
                <Hosting  imgPath="pexels-brett-sayles-2881233.jpg"
                      h1 = "Serveur Dédié"
                      imgAlt="serveurs"
                      dataFileName="dataDedicated"
                />
          } />

          <Route path={"mutualise"} element={ 
              <Hosting  imgPath=""
                        h1 = "Serveur mutualisé"
                        imgAlt=""
                        dataFileName="dataShared"
              />
          } />

          <Route path={"cloud"} element={ 
            <Hosting  imgPath="pexels-pixabay-531972.jpg"
                      h1 = "Service cloud"
                      imgAlt="nuage"
                      dataFileName="dataCloud"
            />
          } />

      </Routes>

      </main>
      
      <Footer />

    </React.Fragment>

  );
}

export default App;
