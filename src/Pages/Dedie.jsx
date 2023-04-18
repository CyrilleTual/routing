import React from 'react'
import DisplayContent from '../Components/DisplayContent'

function Dedie() {
  const items =[
    {
      price: "19,99",
      text: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, recusandae ad quo et delectus accusamus.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque rerum soluta at corrupti consectetur doloribus, earum aut explicabo libero incidunt velit nesciunt dolore optio iste accusantium cupiditate est atque. Quae voluptatem exercitationem eligendi similique reprehenderit aliquid perspiciatis delectus! Porro ipsa esse quibusdam nobis eos suscipit molestias possimus dicta atque!",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum ipsum unde eos minima! Est illum alias inventore, architecto hic accusamus. Culpa magnam dolore itaque."
      ],
    } 
  ]

  return (
    <div className='details'>
      <h1>Serveur Dédié</h1>
      {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )
}

export default Dedie