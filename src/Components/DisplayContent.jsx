import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function DisplayContent({item}) {
    return (
        <React.Fragment>

            {item.icon &&  <FontAwesomeIcon icon={faUser} />}
            {item.title && <h3>{item.title}</h3>}
            {item.price && <p className="price">{item.price}€ / mois</p>}
            {item.text.map((txt, i) => <p index={i}>{txt}</p>)}
            
        </React.Fragment>
    )
}

export default DisplayContent