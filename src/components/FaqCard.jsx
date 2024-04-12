import React, { useState } from 'react';

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
    
    <div className="border pt-1 px-6 rounded-lg mb-4 overflow-hidden transition-all duration-500 bg-gray-200 w-[800px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-[400] ">{question}</h2>
        <button 
          onClick={toggleOpen} 
          className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'} text-colorednavbg font-[300] text-[40px]`}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <div 
        className={`transition-opacity duration-500 ${isOpen ? 'opacity-100 h-[80px]' : 'opacity-0 h-0'} text-platformHeader`}
        aria-expanded={isOpen}
      >
        <p className={`${isOpen ? 'mt-2' : 'mt-0'} text-[17px]  `}>{answer}</p>
      </div>
    </div>
    </div>
  );
};

export default FaqCard;