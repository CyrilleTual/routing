import React from 'react'
import DisplayContent from '../../Components/DisplayContent'
import { datasToDisplay } from '../../datas/datas2.js'

function Hosting(props) {

  const toto = (props.dataFileName) 

  const items = datasToDisplay[toto]      

  return (
    <div className='details'>
      <h1>{props.h1}</h1>
      <img className='imgDetails' src={props.imgPath} alt={props.imgAlt} />
       {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )
}

export default Hosting 


