import React from 'react';
import FaqCard from './FaqCard';

const FaqSectionGiftcard = () => {
  const faqs = [
    { question: 'What are gift cards?', answer: 'Giftcards are prepaid cards loaded with a specific monetary value that can be used for purchases at designated stores, online retailers, or service providers' },
    { question: 'How do we get gift cards work?', answer: 'Gift cards work similarly to prepaid debit cards. The card holder can use the card to make purchases up to the value loaded onto the card. The balance decreases with each purchase until it reaches zero or the card expiration date.' },
    { question: 'Where can i use giftcards?', answer: 'Gift cards can typically be used at the specific retailer, restaurant, or service provider indicated on the card. Some gift cards may also be used online or at affiliated locations.' },
    { question: `What should I do if my gift card isn't working?`, answer: `If your gift card isnt working, first ensure that you're entering the correct cardnumber, PIN (if applicable), and security code. If the card still isn't working, contactthe issuer's customer service for assistance, as there may be an issue with the card'sactivation or balance.` },
    { question: `Can i store my unused giftcard on fominance?`, answer: `Absolutely, we provide a safe wallet space for you to store your unused cards, not
    minding where they were purchased from, both physical and digital.` },

  ];

  return (
    <div className='pt-[100px]'>
      {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSectionGiftcard;