

// function Newsletter (){
//     return(
//         <div>
//             <h1>Subscribe to our newsletter</h1>
//             <p>Subscribe to Our Newsletter for Exclusive Updates and Special Offers!Lets keep You Informed and Inspired Every Step of the Way</p>
//         </div>
//     )
// }

// export default Newsletter;



import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You would typically send 'email' to your server here
    console.log('Submitting email:', email);
    // After submitting, clear the input
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div style={{ background: '#283593', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Subscribe to our newsletter</h2>
      <p style={{ color: '#fff' }}>
        Subscribe to our newsletter for exclusive updates and special offers!
      </p>
      <p style={{ color: '#fff' }}>Let's keep you informed and inspired every step of the way</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#304FFE', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;