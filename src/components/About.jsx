import React from 'react';
import Colorednav from './colorednav';
import Footer from "./footer";
import AboutHero from "./aboutHero"
import Sections from "./aboutsections"
import TestimonialCarousel from "./Testimonial";
import Jace from "./../assets/jace.svg"
import Sophia from "./../assets/sophia.svg"
import Abbie from "./../assets/abbie.svg"
import FaqSection from './FaqSection';
import Sittingman from './../assets/sittingman.svg'


const testimonials = [
  { name: 'Jace',
    text: 'Absolutely love this gift card web app! Super easy to use, and the variety of gift card options is fantastic',
    rating: 4,
    imageUrl:Jace,
  },
  { name: 'Sophia',
    text: 'Fominance is absolutely the best! i was sceptical at first, but now, i have no regrets',
    rating: 5,
    imageUrl:Sophia,
  },
  { name: 'Sophia',
    text: 'Such a fun and convenient way to send gifts! My friends always appreciate receiving their favorite gift cards through this app. Highly recommend!',
    rating: 5,
    imageUrl:Sophia,
  },
  { name: 'Abbie',
    text: 'Fominance is absolutely the best! i was sceptical at first, but now, i have no regrets',
    rating: 5,
    imageUrl:Abbie,
  },
  
];


function About() {
  return (
    <div>
     <Colorednav/>
     <AboutHero/>
     <Sections/>
     <TestimonialCarousel testimonials={testimonials} />
     <div id='faq'>
      <div className='pl-[100px]'>
        <h1 className='font-[600] text-[48px] leading-[62px] mt-[80px]'>
        Frequently asked questions.
        </h1>
        <h4 className='font-[500] text-[24px] leading-[40px] mt-[40px]'>
        We have answers to most of your Questions
        </h4>
      </div>
     <div className='flex justify-between px-[100px] pt-[40px]' >
      <FaqSection />
      <img src={Sittingman} alt="" />
    </div>
     </div>
     
     
     <Footer/>
     
    </div>


  )
}

export default About;
