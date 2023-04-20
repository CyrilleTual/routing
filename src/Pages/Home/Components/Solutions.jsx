import React from 'react'
import DisplayContent from '../../../Components/DisplayContent'
import { dataSolution as items } from '../../../datas/datas'

function Solutions() {

  return (
    <section>
        <h2>Notre solution en 3 points</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )
}

export default Solutions