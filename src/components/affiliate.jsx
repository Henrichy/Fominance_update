import React from 'react'
import Head from './Nav'
import Footer from './footer'
import patternA from "../assets/patternA.png"
import sallyA from "../assets/sallyA.png"
import salyB from "../assets/SalyB.png"
import salyC from "../assets/SalyC.png"
import salyD from "../assets/SalyD.png"
import salyF from "../assets/SalyF.png"
import salyE from "../assets/SalyE.png"
import icon from "../assets/icon.png"

import './affiliate.css'
import './blog.css'



function Affiliate() {
  return (
    <div>
      <Head />
      <div className='relativebox'>
        <img src={patternA} alt="" />
        <img className='absolutebox' src={sallyA} alt="" />
        <h1 className='absolute text-gray-700 font-bold text-5xl top-[80px]'>Become an Affiliate</h1>
        <div className='inputt'>
        <div className="therelative relative flex items-center bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2">
            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full"
              placeholder="Enter your email address here"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
          </div>
          </div>
        </div>
        <div className='thebigcont flex-col'>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='headin text-4xl'>Join our affiliate program.</h3>
            <h4 className='subhead'>Become a Fominance partner with these three steps.</h4>
            </div>
            <div  className='flex justify-between items-center mt-10 w-[100%] h-[360px]'>
                <div className='flex flex-col justify-center items-center w-[30%] h-[100%] bg-white rounded-md px-10 pb-4'>
                    <img src={salyB} alt="" />
                    <h2 className='font-semibold text-xl'>Register.</h2>
                    <h3 className='text-center'>Register with us as an affiliate partner to start your reward journey.</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[30%] h-[100%] bg-white rounded-md px-10 pb-4'>
                    <img src={salyC} alt="" />
                    <h2 className='font-semibold text-xl'>Start Your Affiliate Journey.</h2>
                    <h3 className='text-center'>Start your affiliate journey with us by getting your affiliate link, and  inviting people through it.</h3>
                    </div>                
                    <div className='flex flex-col justify-center items-center w-[30%] h-[100%] bg-white rounded-md px-10 pb-4'>
                    <img src={salyD} alt="" />
                    <h2 className='font-semibold text-xl'>Get Massive Reward.</h2>
                    <h3 className='text-center'>Enjoy massive benefit as an affiliate.</h3>
                    </div>
            </div>
            <button className='rounded-[30px] bg-blue-500 text-white px-6 py-3 my-8'>Register</button>
            <div className='bg-white rounded-md flex justify-between w-[100%] items-center py-10 gap-10 px-10'>
                <div><h2 className='headin text-4xl'>Unlimited Rewards.</h2>
                <h3 className='subhead'>As an affiliate, you will get a set of percentage for every purchase made by 
                    an account that was registered using your link.</h3>
                </div>
                <div><img  src={salyF} alt="" /></div>
            </div>
            <div className='bg-white rounded-md flex justify-between w-[100%] items-center gap-10 py-10 px-10 my-10'>
                <div><img  src={salyE} alt="" /></div>
                <div><h2 className='headin text-4xl'>Optimization of account.</h2>
                <h3 className='subhead'>Get access to an affiliate dashboard where you
                 will be able to 
                see all your campaigns analytics and earnings.</h3>
                </div>
                
            </div>
        </div>
    <Footer />
    </div>
  )
}

export default Affiliate
