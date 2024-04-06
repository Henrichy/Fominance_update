import React, { useState } from 'react';
import Left from "./../assets/leftbutton.svg"
import Right from "./../assets/rightbutton.svg"

function TestimonialCard({ testimonial }) {
  if (!testimonial) {
    // Render nothing if there is no testimonial
    return null;
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    );
  }

  return (
    <div className="max-w-sm text-left rounded-2xl h-[407px] w-[366px] overflow-hidden ml-9 shadow-lg p-10 bg-white m-2 flex flex-col ">
      <div className="text-lg mb-2">{stars}</div>
      <p className="text-gray-700 text-base mb-4 font-[400] text-[22px] mt-5">{testimonial.text}</p>
      <hr className="mt-auto mb-7" />
      <div className="flex items-center ">
      
         <img className="w-10 h-10 rounded-full mr-4" src={testimonial.imageUrl} alt={testimonial.name} />
        <div className="text-sm ">
          <p className="text-gray-900 leading-none mt-[]">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const getTestimonialIndex = (offset) => {
    const newIndex = activeIndex + offset;
    return (newIndex + testimonials.length) % testimonials.length;
  };

  const nextTestimonial = () => setActiveIndex(getTestimonialIndex(1));
  const prevTestimonial = () => setActiveIndex(getTestimonialIndex(-1));

  return (
    <div className="flex flex-col items-center mt-9">
      <div className="flex justify-center">
      <button onClick={prevTestimonial} className="mx-7 my-auto bg-carouselB transition ease-linear hover:shadow-2xl  hover:bg-gray-300 w-[72px] h-[72px] hover:text-carouselB  text-gray-800 font-bold py-2 px-4 rounded-full">
          <img src={Left} alt="left scroll" className='mx-auto' />
        </button>
        <TestimonialCard testimonial={testimonials[getTestimonialIndex(-1)]} />
        <TestimonialCard testimonial={testimonials[activeIndex]} />
        <TestimonialCard testimonial={testimonials[getTestimonialIndex(1)]} />
        <button onClick={nextTestimonial} className="mx-7 bg-carouselB my-auto transition ease-linear hover:shadow-2xl hover:bg-gray-300 w-[72px] h-[72px] hover:text-carouselB text-gray-800 font-bold py-2 px-4 rounded-full">
          <img src={Right} alt="right scroll" className='mx-auto' />
        </button>
      </div>
      <div className="flex mt-9 mb-9 ">
        
       
      </div>
    </div>
  );
}

export default TestimonialCarousel;