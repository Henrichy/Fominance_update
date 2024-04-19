import React from 'react';
import Saly1 from "./../assets/minijet.svg";
import {Typewriter} from "react-simple-typewriter"
import Saly2 from "./../assets/jetmini1.svg";
import Globe from "./../assets/globe.svg";

const AboutHero = () => {
  return (

    <div className=''>
      <div className='bg-colorednavbg text-center mt-0 pt-24'>  
        <h1 className='text-abtHeroH font-medium text-5xl leading-snug py-6'>
          Transforming the world of gifting.
        </h1>
        <h3 className='font-normal text-4xl leading-9 py-6 text-abtHeroP'>

          Redefining the Share of Joy Around the Globe!
        </h3>
        <h4 className='font-medium text-abtHeroH text-2xl leading-tight py-6'>
          100% internet
        </h4>
        <span className='text-typewriter font-[600] text-[29px] leading-[39.5px]'>
              <Typewriter 
                  words={['Giftcards', 'Convenient Gifting', 'Easy Payments']}
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                /> 
            </span>

        <div className='flex justify-between flex-wrap'>
          <img className="w-full md:w-auto max-w-xs md:max-w-none" src={Saly1} alt="" />
          <img className="w-full md:w-auto max-w-xs md:max-w-none" src={Saly2} alt="" />
          <img className="w-full md:w-auto max-w-xs md:max-w-none mr-20 mb-auto" src={Globe} alt="" />

        </div>
      </div>
    </div>
  );

}

export default AboutHero;

