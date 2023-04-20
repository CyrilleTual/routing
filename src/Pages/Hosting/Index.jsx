import React from 'react'
import DisplayContent from '../../Components/DisplayContent'
//import img from xxxxxxxxxxxxxxx
//import { xxxxxxxxx as items } from 'xxxxxxxxxxxxxxxxx'

function Hosting(props) {

  return (
    <div className='details'>
      <h1>{props.h1}</h1>
      <img className='imgDetails' src={props.imgPath} alt={props.imgAlt} />
        {/**items.map((item, i)=> 
            <article key={i}> 
                {<DisplayContent item={item} />} 
            </article>
            )
  */}
    </div>
  )
}

export default Hosting 


