import React from 'react';
import FaqCard from './FaqCard';

const FaqSection = () => {
  const faqs = [
    { question: 'Can i customize my giftcard with a personal message?', answer: 'Yes, you can personalize your gift card with a custom message and choose from a selection of designs to suit the occasion.' },
    { question: 'Can i check the balance of my Giftcard?', answer: 'Yes, most gift cards purchased from our platform allow you to check the balance online or by contacting customer support.' },
    { question: 'What if i loose my giftcard or accidentally delete the mail?', answer: 'Please contact our customer support team, and we will assist you in reissuing the gift card' },
    { question: 'Is there an expiration date for giftcard purchase on the platform?', answer: 'Expiration dates vary depending on the retailer or service provider. You can find expiration details on the specific gift card terms and conditions.' },
    
  ];

  return (
    <div className='pt-[100px]'>
      {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSection;