import React from 'react';
import styles from "./modal.module.css";

function Modal(props) {
    if (!props.show){
        return null
    }
    return (
    <>
        <div className={styles.modal}>

            <div className={styles.content}>
                <h1>Votre saisie :</h1>
                <p>Vous êtes {props.contact.firstName} {props.contact.lastName}</p>
                <button onClick={props.onClose}>Close</button>
            </div>
            
        </div>
    
    </>
    )
}

export default Modal