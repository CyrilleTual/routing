import React from 'react'
import DisplayContent from '../Components/DisplayContent'

function Mutualise() {

  const items =[
    {
      icon : false,
      price: "9,99",
      text: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore neque rerum soluta at corrupti consectetur doloribus, earum aut explicabo libero incidunt velit nesciunt dolore optio iste accusantium cupiditate est atque. Quae voluptatem exercitationem eligendi similique reprehenderit aliquid perspiciatis delectus! Porro ipsa esse quibusdam nobis eos suscipit molestias possimus dicta atque!"
      ],
    } 
  ]

  return (
    <div className='details'>
      <h1>Serveur mutualisé</h1>
      {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}
    </div>
  )

}

export default Mutualise