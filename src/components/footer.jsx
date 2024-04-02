import React from 'react'
import form from "../assets/form.png"
import talk1 from "../assets/talk1.png"
import talk2 from "../assets/talk2.png"
import Socialfb from "../assets/Socialfb.png"
import Socialig from "../assets/Socialig.png"
import Socialin from "../assets/Socialin.png"
import Socialtwitter from "../assets/Socialtwitter.png"
import Playst from "../assets/Playst.png"
import appst from "../assets/appst.png"

import "./Home.css"

function Footer() {
  return (
    <div className="bg-footerbg flex flex-col justify-center items-center pt-16 pb-4 px-10 ">
    <img className="mb-2" src={talk1} alt="Logo" />
    <h1 className='text-2xl text-white font-semibold'>Have your giftcard trading conveniently accessible</h1>
    <div className="flex gap-10 mt-10">
      <div className='bg-black rounded-2xl pointer flex items-center px-4 py-2 text-white gap-6 text-xl'>
        <div><img src={Playst} alt="" /></div>
        <div className='mr-6'><small>Download it on</small> <br/> <strong>Google Play</strong> </div>
        </div>      
        <div className='bg-black rounded-2xl pointer flex items-center px-4 py-2 text-white gap-6 text-xl'>
        <div><img src={appst} alt="" /></div>
        <div className='mr-6'><small>Download it on the</small> <br/> <strong>App Store</strong> </div>
        </div> 
            </div>

    <div className="flex justify-center w-full mt-16 ml-20 mb-10">
      <div className="w-1/6">
        <img className="h-16 w-auto" src={form} alt="Logo" />
        <div className="flex ml-2 gap-4">
          <img className="" src={Socialfb} alt="Logo" />
          <img className="" src={Socialig} alt="Logo" />
          <img className="" src={Socialin} alt="Logo" />
          <img className="" src={Socialtwitter} alt="Logo" />
        </div>
      </div>

      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">COMPANY</h3>
        <a href=''>About Us</a>
        <h5>FAQ</h5>


      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">COMMUNITY</h3>
        <h5>Blog Post</h5>
        <h5>Become an Affiliate</h5>
      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">SUPPORT</h3>
        <h5>FAQs</h5>
        <h5>Contact Us</h5>
      </div>
      <div className="w-1/6 text-white">
        <h3 className="text-gray-400 font-semibold mb-6">DEALS</h3>
        <h5>Give Always</h5>
        <h5>Discounts</h5>
        <h5>Reward Points</h5>
      </div>
      
    </div>
    <div className='linef'></div>

    <div className='allrights'>
     
      <p> ©2024 Fominance.      All rights reserved. &nbsp;  <a className='under' href="">  Privacy Policy</a> &nbsp;<a className='under' href="">Terms and Conditions</a></p>
    </div>

    
  </div>
  )
}

export default Footer
