import React from 'react'

function Contact() {

  const [ contact, setContact] = React.useState({
    lastName: "",
    firstName: "",
    email: "",
    textContact: "",
    newsLetter: "oui",
  });

  const uptForm = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    console.log(e.target.name)
    setContact({...contact, [e.target.name]: e.target.value})
    //setContact( (old) => ({...old, [e.target.name]: e.target.value}) )
    console.log(contact)
  }

  return (
    <div className='details'>
      <h1>Contact</h1>
    {console.log(contact)}
      <form>
        <label htmlFor="lastName">Votre Nom: </label>
        <input type="text" id="lastName" name="lastName" value={contact.lastName} onChange={uptForm}/>

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

        <label htmlFor="newsLetterYes">Ok pour le news letter</label>
        <input type="radio" 
              id="newsLetterYes" 
              name="newsLetter" 
              checked={contact.newsLetter === "oui"}
              value="oui"
              onChange={uptForm}/>
            

        <label htmlFor="newsLetterNo">Non merci</label>
        <input type="radio" 
              id="newsLetterNo" 
              name="newsLetter" 
              checked={contact.newsLetter === "non"}
              value="non" 
              onChange={uptForm}>
        </input>

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