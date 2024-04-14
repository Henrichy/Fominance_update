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
        <div className="therelative relative  bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2">
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
        <div className="w-[40%] relative  bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2 mb-10">
            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full"
              placeholder="Enter topic here"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
          </div>
          </div>
          <div>
           
            <div className='blogg mb-10 flex justify-center gap-20 pb-10 h-[600px]'>
            <div className='w-[30%] bg-white h-[600px] rounde writeup'>
            <img className='rounde' src={handcard} alt="" />
            <div className=' text-2xl font-semibold bg-white pb-8 px-4'>
        <h2 className=''>Top 10 Must-Have Gift Cards for Every Occasion.</h2>
        <h3 className='leading-[2] text-sm font-semibold'>Gift cards have become a popular choice for gifting, offering recipients the freedom to choose their own perfect present. 
        With countless options available, it can be challenging to narrow down the best choices. 
        Here are the top 10 must-have gift cards for...</h3>
    </div>

            </div>


            <div className='w-[30%] bg-white h-[600px] rounde writeup'>
            <img className='rounde' src={hearty} alt="" />
            <div className=' text-2xl font-semibold bg-white pb-8 px-4'>
        <h2 className=''>The Rise of Digital Gift Cards: Why They're Here to Stay..</h2>
        <h3 className='leading-[2] text-sm font-semibold'>In recent years, digital 
            gift cards have surged in 
            popularity, revolutionizing the way we give and receive gifts. 
            Gone are the days of traditional paper 
            vouchers and plastic cards; digital gift cards offer 
            convenience, flexibility, and endless possibili...</h3>
            <div></div>
    </div>

            </div>

            </div>
            <div className='blogg flex justify-center gap-20 mb-20 max-h-[600px]'>
            <div className='w-[30%] bg-white h-[600px] rounde writeup'>
            <img className='rounde' src={hearty} alt="" />
            <div className=' text-2xl font-semibold bg-white pb-8 px-4'>
        <h2 className=''>The Rise of Digital Gift Cards: Why They're Here to Stay..</h2>
        <h3 className='leading-[2] text-sm font-semibold'>In recent years, digital 
            gift cards have surged in 
            popularity, revolutionizing the way we give and receive gifts. 
            Gone are the days of traditional paper 
            vouchers and plastic cards; digital gift cards offer 
            convenience, flexibility, and endless possibili...</h3>
            <div></div>
    </div>

            </div>

    <div className='w-[30%] bg-white h-[600px] rounde writeup'>
            <img className='rounde' src={handcard} alt="" />
            <div className=' text-2xl font-semibold bg-white pb-8 px-4'>
        <h2 className=''>Top 10 Must-Have Gift Cards for Every Occasion.</h2>
        <h3 className='leading-[2] text-sm font-semibold'>Gift cards have become a popular choice for gifting, offering recipients the freedom to choose their own perfect present. 
        With countless options available, it can be challenging to narrow down the best choices. 
        Here are the top 10 must-have gift cards for...</h3>
    </div>

            </div>
</div>

          </div>
          <div className='house px-10 pb-14 h-[600px]'>
            <h1 className='text-3xl font-semibold feature mb-6'>Featured Update</h1>
            <div className='flex justify-between items-center gap-10'>
              <div  className='w-[40%]'><img src={giftcardd} alt="" /></div>
              <div className='w-[40%] mr-20'><h2 className='orange text-xl font-semibold mb-6'>How To Redeem Apple Gift Card For Cash In Nigeria [2024]</h2>
              <h3>In Nigeria, Apple gift cards have become a popular form of gifting, 
                offering recipients the chance to purchase apps, games, music, 
                and more from the Apple App Store and iTunes Store. However, there may 
                be times when you prefer to convert your Apple gift card...</h3>
              </div>
            </div>
          </div>
          <div className='house px-10 pb-14 h-[600px]'>
            <div className='flex justify-between items-center gap-10'>
              <div  className='w-[40%]'><img src={cardboard} alt="" /></div>
              <div className='w-[40%] mr-20'><h2 className='orange text-xl font-semibold mb-6'>Gift Card Etiquette: Dos and Don'ts for Givers and Receivers.</h2>
              <h3>Gift cards have become a popular choice for gifting, offering recipients the freedom to 
                choose their own perfect present. However, navigating the 
                world of gift card etiquette can sometimes be tricky. 
                Here are some dos and don'ts for both givers and receivers
                 to ensure a smooth and enjoyable gifting experience...</h3>
              </div>
            </div>
          </div>
    <Footer />
    </div>
  )
}
export default BlogPost;