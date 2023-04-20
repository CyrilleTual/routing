import React from 'react'
import DisplayContent from '../../Components/DisplayContent'
import cloud from '../../assets/img/pexels-pixabay-531972.jpg'
import { dataCloud as items } from '../../datas/datas'

function Cloud() {

  return (
    <div className='details'>
      <h1>Service cloud</h1>
      <img className='imgDetails' src={cloud} alt="nuage" />
      {/* {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)} */}
       {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )
}

export default Cloud