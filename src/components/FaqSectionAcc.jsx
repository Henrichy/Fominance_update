import React from 'react';
import FaqCard from './FaqCard';

const FaqSectionAcc = () => {
  const faqs = [
    { question: 'How do I create an account?', answer: `To create an account, visit the website's sign-up or registration page and provide the
    required information, such as your name, email address, and password. Follow the
    prompts to complete the registration process, and you'll receive a confirmation
    email to verify your account.` },
    { question: 'I forgot my password. How can I reset it?', answer: `If you forgot your password, you can usually reset it by clicking on the "Forgot
    Password" or "Reset Password" link on the login page. Follow the instructions to
    verify your identity by entering your email address, and then create a new password` },
    { question: 'Why am I unable to log in to my account?', answer: `There could be several reasons why you're unable to log in to your account,
    including entering incorrect login credentials, account suspension or termination,
    technical issues with the website or app. Double-check your username and
    password for accuracy, and if the problem persists, contact customer support for
    assistance.` },
    { question: `Can I change my username or email address?`, answer: `You may be able to change your username or email address in your account
    settings., Look for the "Edit Profile" or "Account Settings" section to update your
    information. If you're unable to make changes yourself, contact customer support
    for assistance.` },
    { question: `Is my account information secure?`, answer: `Fominance take various security measures to protect users' account information,such as encryption, 
    secure login protocols, and regular security audits. However, 
    it'sessential to follow best practices, such as choosing strong passwords and 
    enablingtwo-factor authentication, 
    to further enhance the security of your account.` },    
    { question: `What should I do if I suspect unauthorized activity on my account?`, answer: `If you suspect unauthorized activity on your account, such as unrecognized login
    attempts or changes to your account information, take immediate action to secure
    your account. Change your password, review your account settings for any
    unauthorized changes, and contact customer support to report the issue and
    request further assistance.` },
  ];

  return (
    <div className='pt-[100px]'>
      {faqs.map((faq, index) => (
        <FaqCard key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqSectionAcc;