import React from 'react'
import Head from './Nav'
import Footer from './footer'
import herro from "../assets/herro.png"
import cardboard from "../assets/cardboard.png"
import icon from "../assets/icon.png"
import giftcardd from "../assets/giftcardd.png"
import './blog.css'
import Phoneimg from "../assets/image201.svg"
import article from "../assets/articlee.png"
import handcard from "../assets/handcard.png"
import hearty from "../assets/hearty.png"




function BlogPost() {
  return (
    <div className='blogg'>
    <Head />
    <div>
    <div className='flex items-center justify-center relative herro'>
    <img className='w-[100%]' src={Phoneimg} alt="" />
    <img className='article' src={article} alt="" />
    <div className='input'>
        <div className="therelative relative  bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-1">
            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full"
              placeholder="Enter topic here"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
          </div>
          </div>
    </div>
    </div>
    <div className='flex justify-center items-center containn'>
        <div className="w-[40%] relative  bg-white flex rounded-full items-center justify-around pl-[10px] px-4 py-2 gap-2 mb-10 shadow-lg">
            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full pl-[10px]"
              placeholder="Enter topic here"
            />
            <button className="bg-blue-600  pl-3 pr-3 text-white rounded-full w-[162px] h-[50px]">Search</button>
          </div>
          </div>

          {/* card section */}

          <div className="grid grid-cols-2 gap-[100px] px-[90px]  ">
            <div className="flex-col w-[583px] h-[793px] rounded-2xl shadow-lg overflow-hidden ml-auto">
              <div>
                <img src={handcard} alt="" className='' />
              </div>
              <div className='p-[50px]'>
                <h1 className='font-[500] text-[28px] leading-[33.89px]'>
                Top 10 Must-Have Gift Cards for Every Occasion.
                </h1>
                <h3 className='font-[500] text-[16px] leading-[38px] mt-3'>
                Gift cards have become a popular choice for gifting, offering recipients the freedom to choose their own perfect present. With countless options available, it can be challenging to narrow down the best choices. Here are the top 10 must-have gift cards for...
                </h3>

              </div>
            </div>
            <div className="flex-col w-[583px] h-[793px] rounded-2xl shadow-lg overflow-hidden mr-auto">
              <div>
                <img src={hearty} alt="" className='' />
              </div>
              <div className='p-[50px]'>
                <h1 className='font-[500] text-[28px] leading-[33.89px]'>
                The Rise of Digital Gift Cards: Why They're Here to Stay.
                </h1>
                <h3 className='font-[500] text-[16px] leading-[38px] mt-3'>
                In recent years, digital gift cards have surged in popularity, revolutionizing the way we give and receive gifts. Gone are the days of traditional paper vouchers and plastic cards; digital gift cards offer convenience, flexibility, and endless possibili...
                </h3>

              </div>
            </div>
            <div className="flex-col w-[583px] h-[793px] rounded-2xl shadow-lg overflow-hidden ml-auto">
              <div>
                <img src={hearty} alt="" className='' />
              </div>
              <div className='p-[50px]'>
                <h1 className='font-[500] text-[28px] leading-[33.89px]'>
                The Rise of Digital Gift Cards: Why They're Here to Stay.
                </h1>
                <h3 className='font-[500] text-[16px] leading-[38px] mt-3'>
                In recent years, digital gift cards have surged in popularity, revolutionizing the way we give and receive gifts. Gone are the days of traditional paper vouchers and plastic cards; digital gift cards offer convenience, flexibility, and endless possibili...
                </h3>

              </div>
            </div>
            <div className="flex-col w-[583px] h-[793px] rounded-2xl shadow-lg overflow-hidden mr-auto">
              <div>
                <img src={handcard} alt="" className='' />
              </div>
              <div className='p-[50px]'>
                <h1 className='font-[500] text-[28px] leading-[33.89px]'>
                Top 10 Must-Have Gift Cards for Every Occasion.
                </h1>
                <h3 className='font-[500] text-[16px] leading-[38px] mt-3'>
                Gift cards have become a popular choice for gifting, offering recipients the freedom to choose their own perfect present. With countless options available, it can be challenging to narrow down the best choices. Here are the top 10 must-have gift cards for...
                </h3>

              </div>
            </div>
          </div>
          {/* Featured updates Section */}
          
    <Footer />
    </div>
  )
}
export default BlogPost;