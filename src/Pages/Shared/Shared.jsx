import React from 'react'
import DisplayContent from '../../Components/DisplayContent'
import { dataShared as items } from '../../datas/datas'

function Mutualise() {

  return (
    <div className='details'>
      <h1>Serveur mutualisé</h1>
      {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )

}

export default Mutualise