import React from 'react';
import Titre from '../Components/Titre';


const Contact = () => {
  return (
    <div>
      <Titre titre="Contactez-nous :" />
      <div class="contact-container">
        <form action="" method="post" class="contact-form">
          <label for="name">Votre nom:</label>
          <input type="text" id="" name="" />

          <label for="mail">Votre Email:</label>
          <input type="email" id="" name="" />

          <label for="msg">Votre Message:</label>
          <textarea id="msg" name=""></textarea>

          <input type="submit" value="Envoyer" className='input-form' />
        </form>
      </div>
    </div>
  );
};

export default Contact;