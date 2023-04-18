import React from 'react'
import DisplayContent from '../Components/DisplayContent'

function Cloud() {
  const items =[
    {
      price: "29,99",
      text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi nobis deleniti soluta, fugiat recusandae laboriosam possimus necessitatibus deserunt, id odit eius commodi, est asperiores corporis ea animi quo quasi..",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",,
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum ipsum unde eos minima! Est illum alias inventore, architecto hic accusamus. Culpa magnam dolore itaque."
      ],
    } 
  ]

  return (
    <div className='details'>
      <h1>Service cloud</h1>
      {/* {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)} */}
       {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )
}

export default Cloud