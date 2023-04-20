import React from 'react'
import DisplayContent from '../../../Components/DisplayContent'
import { datasToDisplay } from '../../../datas/datas2';

function Solutions() {

  const items = datasToDisplay["dataSolution"]

  return (
    <section>
        <h2>Notre solution en 3 points</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )
}

export default Solutions