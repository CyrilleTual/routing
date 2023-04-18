import React from 'react'
import DisplayContent from './DisplayContent'

function Solutions() {

    // necessité de mette le texte dans un tableau pour compatibilité avec la section "solution"
    const items =[              
        {
            title: "Configuration",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis qui ipsum maxime architecto illum nam.",]
        },
        {
            title: "Monitoring",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis qui ipsum maxime architecto illum nam.",]
        },
        {
            title: "sauvegarde",
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis qui ipsum maxime architecto illum nam.",]
        },
    ]


  return (
    <section>
        <h2>Notre solution en 3 points</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )
}

export default Solutions