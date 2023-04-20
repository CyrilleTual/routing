import React from 'react'
import { Link } from 'react-router-dom';
import style from './footer.module.css'

function Footer() {
  return (
    <footer className={style.myFooter}>
            <nav>
              <Link to={"./"}>Accueil</Link>
              <Link to={"mutualise"}>Serveur Mutualisé</Link>
              <Link to={"dedie"}>Serveur Dédié</Link>
              <Link to={"cloud"}>Service "Cloud"</Link>
              <Link to={"contact"}>Contact</Link>
              <Link to={"connect"}>Se connecter</Link>

            </nav>
    </footer>
  )
}

export default Footer