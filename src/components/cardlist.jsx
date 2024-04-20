import React, { useState } from 'react';
import Card1 from "./../assets/card1.svg"
import Card2 from "./../assets/card2.svg"
import Card3 from "./../assets/card3.svg"
import Card4 from "./../assets/card4.svg"
import Card5 from "./../assets/card5.svg"
import Heart from "./../assets/heart.svg"

// Dummy data array simulating fetched data
const cardData = [
    {
        id: 1,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 2,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 3,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 4,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 5,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 6,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 7,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 8,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 9,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 10,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 11,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 12,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 13,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 14,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 15,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 16,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 17,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 18,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 19,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 20,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 21,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 22,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 23,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 24,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 25,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 26,
        title: 'VALKYRIE DRIVE Complete Edition (PC) Steam Key',
        image: Card2,
        price: '$150',
        likes: '1.2k',

      },
      {
        id: 27,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card3,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 28,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card4,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 29,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card1,
        price: '$150',
        likes: '1.3k',
      },
      {
        id: 30,
        title: 'Garena Free Fire - 100 Diamonds Key GLOBAL',
        image: Card5,
        price: '$150',
        likes: '1.3k',
      },
];

// Assuming we want to display 8 cards per page
const CARDS_PER_PAGE = 25;

const Card = ({ title, image, price, likes }) => {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white h-[540px] w-[18%] mt-[50px] mb-[50px]">
          <img className="w-full" src={image} alt={title} />
          
          <div className="px-6 pt-4">
            <div className="font-bold text-xl ">{title}</div>
            <span className='text-orange-500 '>Global</span>
            <p className='pt-[10px]'>from</p>
            <p className="text-gray-700  font-[700] text-[20px] ">{price}</p>
          </div>
          <div className="px-6  pb-2 flex align-middle">
            <span> <img src={Heart} className='py-[6px]' alt="" /></span>
            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{likes} Likes</span>
          </div>
        </div>
      );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex items-center justify-center space-x-1 ">
      <button
        className={`bg-blue-500 text-white px-3 py-1 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map(number => (
        <button
          key={number}
          className={` text-white px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-blue-700' : ''}`}
          onClick={() => onPageChange(number + 1)}
        >
          {number + 1}
        </button>
      ))}
      <button
        className={`bg-blue-500 text-white px-3 py-1 rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

const CardsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardData.length / CARDS_PER_PAGE);

  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-[32px] ">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            price={card.price}
            likes={card.likes}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={paginate} />
    </>
  );
};

export default CardsList;