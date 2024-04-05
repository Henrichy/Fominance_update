import React from 'react'
import { Link } from "react-router-dom";
import Saly13 from "./../assets/Saly13.svg"



function Supportcomp() {
  return (
    
    <div className=" bg-blue-600 py-14 px-10 flex Supportdiv  ">
      
      <div className='bg-supportleft ml-auto w-[671px] '>
        <img src={Saly13} alt="" className='mx-auto'/>
      </div>
      <div className='h-[398px] bg-white mr-auto w-[671px] p-[50px]'>
        <h1 className='font-[500] text-[30px] leading-[40.86px] '>
        24/7 Support at Your Fingertips.
        </h1>
        <h3 className='font-[400] text-[24px] leading-[40px] mt-8'>
        Our Customer Service Team is Here to Help Make Your Gifting Experience better.
        </h3>
        <h3 className='font-[400] text-[24px] leading-[40px]'>
        Reach Out Anytime, Anywhere!
        </h3>
        <button className='bg-btnBlue rounded-full text-white text-[20px] font-semi-bold w-[162px] h-[50px] mt-8'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Supportcomp
