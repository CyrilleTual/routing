import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function DisplayContent({item}) {
    return (
        <React.Fragment>

            {item.icon &&  <FontAwesomeIcon icon={faUser} />}
            {item.title && <h3>{item.title}</h3>}
            {/** Vérifie si il y a bien un prix et l'affiche */}
            {item.price && <p class="price">{item.price}€ / mois</p>}
            <p>
                {(item.text.map((txt, i) => <p>{txt}</p>))}
            </p>
        </React.Fragment>
    )
}

export default DisplayContent