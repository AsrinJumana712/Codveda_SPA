import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const { user } = useContext(AppContext);

  return(
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: contact@homeyeats.com</p>
        <p>Phone: +94 77 123 4567</p>
        <p>Location: Colombo, Sri Lanka</p>
      </div>
  );
};

export default Contact;
