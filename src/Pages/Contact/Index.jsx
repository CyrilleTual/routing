import React from 'react'
import  styles from"./index.module.css";
import Modal from './Components/Modal.jsx';

function Contact() {

  const [ contact, setContact] = React.useState({
    lastName: "",
    firstName: "",
    email: "",
    textContact: "",
    newsLetter: "oui",
  });

  const [show, setShow] =React.useState(false)

  const uptForm = (e) => {
    setContact({...contact, [e.target.name]: e.target.value})
    //setContact( (old) => ({...old, [e.target.name]: e.target.value}) )
  }

  function submitHandler(e) {
    e.preventDefault();
    //alert (Object.values(contact))
    setShow(true);
  }

  return (
    <div className='details'>
      <h1>Contact</h1>

      <form className={styles.contact_form} onSubmit={submitHandler}>
        <label htmlFor="lastName">Votre Nom: </label>
        <input className={styles.contact_ipt} type="text" id="lastName" name="lastName" value={contact.lastName} onChange={uptForm}/><br />

        <label htmlFor="firstName">Votre Prénom: </label>
        <input className={styles.contact_ipt} type="text" id="firstName" name="firstName" value={contact.firstName} onChange={uptForm}/>

        <label htmlFor="textContact">Votre demande:</label>
        <textarea 
            className={styles.contact_ipt}
            id="textContact" 
            name="textContact"
            rows="5" cols="33"
            value={contact.textContact}
            onChange={uptForm}>
        </textarea>

        <fieldset className={styles.contact_field}>
          <legend>Je m'abonne à la news-letter : </legend>

          <div>
             <input type="radio"
             className={styles.radio} 
              id="newsLetterYes" 
              name="newsLetter" 
              checked={contact.newsLetter === "oui"}
              value="oui"
              onChange={uptForm}/>
              <label htmlFor="newsLetterYes">Oui avec plaisir</label>
          </div> 

          <div>
            <input type="radio"
                className={styles.radio}  
                id="newsLetterNo" 
                name="newsLetter" 
                checked={contact.newsLetter === "non"}
                value="non" 
                onChange={uptForm}/>
                <label htmlFor="newsLetterNo">Non merci</label>
          </div>

        </fieldset>

        <button>Envoyer</button>

        <Modal onClose={()=> setShow(false)} show={show} contact={contact} />
     
      </form>
      <address>
        Monsieur Tutu <br />
        la petite maison <br />
        97000 Petit village dans la Pampa <br />
        e-mail : <a href="mailto:John.Doe@gmail.com">John.doe@gmail.com</a> <br/>
      </address>

    </div>
  )
}

export default Contact