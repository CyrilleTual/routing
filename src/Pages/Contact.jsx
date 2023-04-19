import React from 'react'
import  "./Contact.css";
import Modal from '../Components/Modal';

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
    console.log(e.target.value)
    console.log(e.target.name)
    setContact({...contact, [e.target.name]: e.target.value})
    //setContact( (old) => ({...old, [e.target.name]: e.target.value}) )
    console.log(contact)
  }

  function submitHandler(e) {
    e.preventDefault();
    //alert (Object.values(contact))
    setShow(true);
  }




  return (
    <div className='details'>
      <h1>Contact</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="lastName">Votre Nom: </label>
        <input type="text" id="lastName" name="lastName" value={contact.lastName} onChange={uptForm}/><br />

        <label htmlFor="firstName">Votre Prénom: </label>
        <input type="text" id="firstName" name="firstName" value={contact.firstName} onChange={uptForm}/>

        <label htmlFor="textContact">Votre demande:</label>
        <textarea 
            id="textContact" 
            name="textContact"
            rows="5" cols="33"
            value={contact.textContact}
            onChange={uptForm}>
        </textarea>

        <fieldset>
          <legend>Je m'abonne à la news-letter : </legend>

          <div>
             <input type="radio" 
              id="newsLetterYes" 
              name="newsLetter" 
              checked={contact.newsLetter === "oui"}
              value="oui"
              onChange={uptForm}/>
              <label htmlFor="newsLetterYes">Oui avec plaisir</label>
          </div> 

          <div>
            <input type="radio" 
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