import React from "react";
import Head from "./Nav";
import Footer from "./footer";
import Hero from "./Hero";
import Usp1 from "./usp1"
import AllOne from "./all"
import Usp2 from "./usp2";
import Support from "./Supportcomp";
import Download from "./download"


import TestimonialCarousel from "./Testimonial";
import Jace from "./../assets/jace.svg"
import Sophia from "./../assets/sophia.svg"
import Abbie from "./../assets/abbie.svg"



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


function Home (){
    return(
      
        <div className="" >
          <Head/>
          <Hero/>
          {/* Number 1 platform section */}
          <Usp1/>
          {/* Discover more possibilities section */}
          <Usp2/>
          {/* Our all in one giftcard section */}
          <AllOne/>
          {/* download our app section */}
          <Download/>
           {/* testimonial section */}
          <TestimonialCarousel testimonials={testimonials} />
          {/* download button */}
           <Support/>
           <Footer/>
        
       </div>

    )
}

export default Home;
