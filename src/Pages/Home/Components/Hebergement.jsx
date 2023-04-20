import React from 'react'
import DisplayContent from '../../../Components/DisplayContent'
import { datasToDisplay } from '../../../datas/datas2';



function Hebergement() {

  const items = datasToDisplay["dataHosting"];

  return (
    <section>
        <h2>Choisissez votre style d'hébergement</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )

}

export default Hebergement