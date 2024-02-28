
import React, { useState } from 'react';
import "./Contact.css"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to your server or API
    console.log(formData);
  };

  return (
    <>
    <div id="contacts" >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'orangered', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  
  </>
  )
}

export default  ContactMe