import React from 'react'
import DisplayContent from '../../../Components/DisplayContent'
import { dataHosting as items } from '../../../datas/datas';

function Hebergement() {

  return (
    <section>
        <h2>Choisissez votre style d'hébergement</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )

}

export default Hebergement