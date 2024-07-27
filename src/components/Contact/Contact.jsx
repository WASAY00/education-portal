import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState(''); // State to store result message

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setResult('Sending....'); // Set result message while sending

    const formData = new FormData(event.target);

    formData.append('access_key', '9a793d45-3d23-4edc-9913-5d3000c04d19');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully'); // Success message
        event.target.reset(); // Reset form fields
      } else {
        setResult(data.message); // Error message from API
      }
    } catch (error) {
      console.log('Error', error);
      setResult('An error occurred. Please try again.'); // General error message
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us a Message <img src={msg_icon} alt='Message Icon' /></h3>
        <p>
          For more details or specific inquiries, please contact us.
          Our team is available to answer your questions and provide assistance.
          We're committed to offering the support you need and ensuring your
          satisfaction.
        </p>
        <ul>
          <li><img src={mail_icon} alt='Email Icon' />wasaykhan387@gmail.com</li>
          <li><img src={phone_icon} alt='Phone Icon' /> 03000444993</li>
          <li><img src={location_icon} alt='Location Icon' /> Jhor Town, Lahore, near <br /> Emporium Mall</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />

          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            required
          />

          <label>Write Your Message Here</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            required>
          </textarea>

          <button type='submit' className='btn dark-btn'>
            Submit Now <img src={white_arrow} alt='Submit Arrow' />
          </button>
        </form>
        <span>{result}</span> {/* Display the result message */}
      </div>
    </div>
  );
}

export default Contact;
