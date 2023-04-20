import React from 'react'
import DisplayContent from '../../Components/DisplayContent';
import server from '../../assets/img/pexels-brett-sayles-2881233.jpg'
import { dataDedicated as items } from '../../datas/datas';

function Dedie() {
  return (
    <div className='details'>
      <h1>Serveur Dédié</h1>
      <img className='imgDetails' src={server} alt="serveur" />
      {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )
}

export default Dedie