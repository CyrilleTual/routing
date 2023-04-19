import React from 'react'

function Modal(props) {

   

    if (!props.show){
        return null
    }

    return (
    <>
        <div className='modal'>

            <div className='content'>
                <h1>Votre saisie :</h1>
                <p>Vous êtes {props.contact.firstName} {props.contact.lastName}</p>
                <button onClick={props.onClose}>Close</button>
            </div>
            
        </div>
            
    </>
    )
}

export default Modal