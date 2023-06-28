import { useState } from 'react';
import './index.css';
import './app.css';
import emailjs from '@emailjs/browser'

function Order() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    function sendEmail(e){
      e.preventDefault();
  
      if(name === '' || email === '' || message === ''){
        alert("Preencha todos os campos");
        return;
      }
  
      
      const templateParams = {
        from_name: name,
        message: message,
        email: email
      }
  
      emailjs.send("service_7ugy94a", "template_7g59wmx", templateParams, "Qmnk5elKziH-nz_fL")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
  
      }, (err) => {
        console.log("ERRO: ", err)
      })
  
    }
  
    return (
      <div className="container">
        <h1 className="title">Pedido de transporte</h1>
  
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Steve Jobs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className="input"
            type="text"
            placeholder="douglasabnovato@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className="textarea" 
            placeholder={"Informações do seu pedido: "}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
  
          <input className="button" type="submit" value="Enviar" />
        </form>
  
      </div>
  );
}

export default Order;
