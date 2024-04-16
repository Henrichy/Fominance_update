import React from 'react';
import FaqCard from './FaqCard';


const FaqSectionOrd = () => {
  const faqs = [
    { question: 'How do l place an order?', answer: `To place an order, browse the website or app for the desired products or services,
    add them to your cart, and proceed to checkout. Follow the prompts to enter your
    delivery information, select a payment method, and complete the order.` },
    { question: 'What payment methods are accepted?', answer: `The accepted payment methods include creditvdebit cards, PayPal, Palremit, andCryptocurrencies.Is it safe to enter my payment information online?We implement various security measures, such as encryption and secure paymentgateways, to protect users' payment information and ensure a safe and securecheckout process.` },
     { question: `Is it safer to enter my payment information online?`, answer: `We implement various security measures, such as encryption and secure payment gateways, to protect users' payment information and secure a safe and secure checkout process.` },
    { question: 'What should I do if my payment is declined?', answer: `If your payment is declined, double-check the payment information entered for
accuracy, including the card number, expiration date, and security code. Ensure that
you have sufficient funds available or that your payment method is not expired or
blocked. If the issue persists, contact your bank or financial institution for assistance.` },
   
  ];

  return (
    <div className='pt-[100px]'>
      {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSectionOrd;