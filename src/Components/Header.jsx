import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import style from "./header.module.css"

function Header() {
  return (

    <header className={style.myHeader}>

      <Link to={"./"}  title="Retour à la page d'accueil"  >
        <img src={logo} alt="Logo du site" />
      </Link>

      <nav>
        <Link to={"mutualise"}>Serveur mutualisé</Link>
        <Link to={"dedie"}>Serveur Dédié</Link>
        <Link to={"cloud"}>Service "Cloud"</Link>
        <Link to={"contact"}>Contact</Link>
      </nav>

    </header>
    
  )
}

export default Header