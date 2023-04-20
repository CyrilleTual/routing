import React from 'react'
import  styles from"./index.module.css";
import Modal from './Components/Modal.jsx';
import MyLabel from '../Components/Label';
import MyInput from '../Components/Input';

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
    setShow(true);
  }

  return (
    <div className='details'>
      <h1>Contact</h1>

      <form className={styles.contact_form} onSubmit={submitHandler}>
       
        <MyLabel lblFor="lastName" lblTxt="Votre Nom:" />    
        <MyInput toto="input" class ={styles.contact_ipt} type="text" id ="lastName" name ="lastName" value ={contact.lastName} change = {uptForm}/>

        <MyLabel lblFor="firstName" lblTxt="Votre Prénom: " />
        <MyInput toto="input" class ={styles.contact_ipt} type="text" id ="firtsName" name ="firstName" value ={contact.firstName} change = {uptForm}/>

        <MyLabel lblFor="textContact" lblTxt="Votre demande:" />

        <MyInput 
            toto = "textArea"
            class={styles.contact_ipt}
            id = "textContact" 
            name = "textContact"
            value = {contact.textContact}
            change = {uptForm}
            rows="5" 
            cols="33"
        />    
        
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
              <MyLabel lblFor="newsLetterYes" lblTxt="Oui avec plaisir" />     
          </div> 

          <div>
            <input type="radio"
                className={styles.radio}  
                id="newsLetterNo" 
                name="newsLetter" 
                checked={contact.newsLetter === "non"}
                value="non" 
                onChange={uptForm}/>
               <MyLabel lblFor="newsLetterNo" lblTxt="Non merci" />  
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