import React from 'react'
import DisplayContent from '../../../Components/DisplayContent'

function Hebergement() {

    const items =[
        {   
            icon : true,
            title: "Serveur mutualisé",
            price: "9,99",
            text: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam."
            ],
        },
        {
            icon : true,
            title: "Serveur Dédié",
            price: "19,99",
            text: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam."
            ],
        },
        {
            icon : true,
            title: "Service cloud",
            price: "29,99€",
            text: [

                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis qui ipsum maxime architecto illum nam."
            ],
        },
    ]


  return (
    <section>
        <h2>Choisissez votre style d'hébergement</h2>
      
        {items.map((item, i)=> <article key={i}> {<DisplayContent item={item} />} </article>)}

    </section>
    
  )

}

export default Hebergement