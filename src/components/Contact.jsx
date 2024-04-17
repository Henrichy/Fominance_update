import React from 'react'
import Head from './Nav'
import Footer from './footer'

import salyG from "../assets/SalyG.png"
import './affiliate.css'
import './contact.css'

function Cont() {
  return (
    <>
      <Head />
        <div className=' thebox justify-center items-center flex flex-col h-auto'>
            <div className='relative justify-center flex w-[100%]'>
        <h1 className='absolute top-20 text-gray-700 font-bold text-5xl'>Lets get to know what bothers you.</h1>
        <img className='w-[800px]' src={salyG} alt="" />
        </div>
        </div>
        
        <div className='thebigcontt flex-col px-[100px] '>
       
            <div className='flex flex-col justify-center text-center'>
            <h3 className='headin text-3xl'>Have more questions?</h3>
            <h4 className='subhead font-semibold'>No Worries, we got you</h4>
            </div>
            <div className='flex flex-wrap w-[100%] '>   
              <div className='flex flex-row justify-between w-full'>
              < div className='w-[48%] flex flex-col'>    
                <label className='font-semibold' for="fullname">Full Name</label>
                <input className="focus:outline-textfield bg-transparent w-full h-[66px] p-3 rounded-xl border-solid border-[2px] mt-[10px] " type="text" id="fullname" placeholder="Enter your full name" />
              </div>
              <div className='w-[48%] flex flex-col'>    
                <label className='font-semibold' for="email">Email Address</label>
                <input className="focus:outline-textfield bg-transparent w-full h-[66px] border-solid  border-[2px] rounded-xl p-3 mt-[10px]" type="text" id="email" placeholder="Enter your email address" />
              </div>
              </div>
            </div>
            <div className='w-[100%] flex start flex-col'>    
              <label className='font-semibold' for="subject">Subject</label>
              <input className="focus:outline-textfield bg-transparent w-[100%] h-[66px] border-solid border-[2px]  mt-[10px] rounded-xl p-3" type="text" id="subject" placeholder="Enter the message subject" />
            </div>
            <div className='w-[100%] flex start flex-col'>    
              <label className='font-semibold' for="message">Message</label>
              <input className="focus:outline-textfield bg-transparent w-[100%] h-[66px] border-solid border-[2px] rounded-xl p-3" type="text" id="message" placeholder="Enter your message" />
            </div>
            <button className='rounded-[30px] bg-blue-500 text-white px-6 py-3 my-8 w-[162px] h-[50px] hover:text-opacity-95 transition ease-linear '>Submit</button>
        </div>
        
        
      <Footer />
    </>
  )
}

export default Cont;
