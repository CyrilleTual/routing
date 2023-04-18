import React from 'react'

function Article({item}) {
    return (
        <React.Fragment>
            <h3>{item.title}</h3>
            {/** Vérifie si il y a bien un prix et l'affiche */}
            {item.price && <p class="price">{item.price}€ / mois</p>}
            <p>
                {(item.text.map((txt, i) => <p>{txt}</p>))}
            </p>
        </React.Fragment>
    )
}

export default Article