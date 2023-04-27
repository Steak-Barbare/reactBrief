import React from 'react';
  
const Contact = () => {
  return (
    
    <div className="contact-container">
      <form action="/my-handling-form-page" method="post" className="contact-form">
  <ul>
    <li>
      <label for="name">Votre nom:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li>
      <label for="mail">Votre Email:</label>
      <input type="email" id="mail" name="user_email" />
    </li>
    <li>
      <label for="msg">Votre Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
  </ul>
</form>
    </div>
  );
};
  
export default Contact;