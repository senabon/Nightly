import { MdContactless } from "react-icons/md";
import React from 'react'
import './Styling.css'


function Contact(){

return (
    
    <form className="contact-container">
      <label>Name</label>
      <input type="text" className="name" />
      <label>Email</label>
      <input type="email" className="email"/>
      <label>Message</label>
      <textarea className="message"/>
      <button type="submit"> Submit</button>
    </form>
   
  );
};

export default Contact