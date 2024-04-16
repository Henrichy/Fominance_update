import React from 'react';
import FaqCard from './FaqCard';

const FaqSectionSec = () => {
  const faqs = [
    { question: 'What is Two-Factor Authentication (2FA)?', answer: `Two-Factor Authentication (2FA) is an additional layer of security that requires usersto provide two forms of 
    verification before accessing their accounts. This typicallyinvolves something you knows (such as a password) 
    and something you have (such as a code sent to their mobile device).` },
    { question: 'Why is Two-Factor Authentication (2FA) important?', answer: `Two-Factor Authentication (2FA) adds an extra layer of security to your accounts,
    making it significantly harder for unauthorized individuals to gain access. Even if
    someone manages to obtain your password, they would still need the second factor
    (e.g., a code sent to your phone) to log in.` },
    { question: 'How does Two-Factor Authentication (2FA) work?', answer: `When you enable Two-Factor Authentication (2FA) on your account, youll typicallybe prompted to enter a 
    verification code sent to your mobile device after entering your password. This ensures that only individuals 
    with access to both yourpassword and your mobile device can log in to your account.` },
    { question: `What should I do if I lose access to my Two-Factor Authentication (2FA)
    device?`, answer: `If you lose access to your Two-Factor Authentication (2FA) device (e.g., your
      phone), you should immediately contact our customer support for assistance.` },
    
  ];

  return (
    <div className='pt-[100px]'>
      {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSectionSec;