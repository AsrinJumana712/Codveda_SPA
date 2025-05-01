import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Contact = () => {
  const { user } = useContext(AppContext);

  return (
    <div className='container'>
      <h1>Contact Page</h1>
      <p>{user}, you can reach us at contact@example.com</p>
    </div>
  );
};

export default Contact;
