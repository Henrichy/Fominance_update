import React from 'react'
import Head from './Nav'
import Footer from './footer'
import patternA from "../assets/patternA.png"
import salyG from "../assets/SalyG.png"
import './affiliate.css'
import './contact.css'


function Contactus() {
  return (
    <div>
      <div><Head /></div>

      <div className='relativebox'>
        <img src={patternA} alt="" />
        <img className='absolutebox' src={salyG} alt="" />
        <h1 className='absolute text-gray-700 font-bold text-5xl top-[80px]'>Lets get to know what bothers you.</h1>
        </div>
        <div className='thebigcontt flex-col'>
            <div className='flex flex-col justify-center text-center'>
            <h3 className='headin text-3xl'>Have more questions?</h3>
            <h4 className='subhead font-semibold'>No Worries, we got you</h4>
            </div>
         <div className='w-[100%] flex justify-between'>   
        <div className='w-[45%] flex start flex-col'>    
        <label className='font-semibold' for="fullname">Full Name</label>
        <div className='h-[45px] rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="text" id="fullname" placeholder="Enter your full name" /></div>
        </div>
        <div className='w-[45%] flex start flex-col'>    
        <label className='font-semibold' for="email">Email Address</label>
        <div className='h-[45px] rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="text" id="email" placeholder="Enter your email address" /></div>
        </div>
        </div>
        <div className='w-[100%] flex start flex-col'>    
        <label className='font-semibold' for="subject">Subject</label>
        <div className='h-[45px] rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="text" id="subject" placeholder="Enter the message subject" /></div>
        </div>
        <div className='w-[100%] flex start flex-col'>    
        <label className='font-semibold' for="message">Message</label>
        <div className='h-[125px] rounded-md w-[100%] bg-none  flex px-5'><input className="focus:outline-none bg-transparent w-[100%] h-[40%]" type="text" id="message" placeholder="Enter your message" /></div>
        </div>
        <button className='rounded-[30px] bg-blue-500 text-white px-6 py-3 my-8'>Submit</button>

        </div>
      <Footer />
    </div>
  )
}

export default Contactus