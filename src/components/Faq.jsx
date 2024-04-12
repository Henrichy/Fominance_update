import React from "react";
import Footer from "./footer";
import Head from "./Nav";
import sallyA from "../assets/Saly14.svg"
import Saly29 from "../assets/Saly29.svg"
import Saly27 from "../assets/Saly27.png"
import Saly12 from "../assets/Saly12.svg"
import Saly45 from "../assets/Saly45.svg"

import icon from "../assets/icon.png"

import './affiliate.css'
import './blog.css'
import './Faq.css'
import Supportcomp from "./Supportcomp";
import FaqSection from "./FaqSection";





function Faq (){
    return (
        <>
        <Head /> 

        <div className="thebigb "></div>

        <div className=" justify-center flex items-center flex-col">
            <div className="relative flex justify-center items-center">
        <img className='w-[100%]' src={sallyA} alt="" />
        <h1 className=' absolute top-[20px] flex text-gray-700 font-bold text-5xl'>How might we <h2 className="text-orange-300">&nbsp; help you?</h2></h1>
        <div className='inputt'>
        <div className="therelative relative flex items-center bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2">

            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full"
              placeholder="Enter your question here"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
          </div>
          </div>
        </div>

        </div>
        <div className="conta flex justify-center flex-col items-center">
            <div className="flex justify-center z-10 mt-[-90px] items-center gap-14 flex-wrap py-10 w-[70%]">
                <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-md p-12"><img className="w-[200px] h-[150px]" src={Saly29} alt="" /><h3 className="font-semibold">Giftcards</h3></div>
                <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-md p-12"><img className="w-[200px] h-[150px]" src={Saly12} alt="" /><h3 className="font-semibold">Accounts and Login</h3></div>
                <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-md p-12"><img className="w-[200px] h-[150px]" src={Saly45} alt="" /><h3 className="font-semibold">Ordering and Payment</h3></div>
                <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-md p-12"><img className="w-[200px] h-[150px]" src={Saly27} alt="" /><h3 className="font-semibold">2FA and Security</h3></div>
            </div>
            <h3 className="font-bold asked">Frequently Asked Questions.</h3>
            <div className=" w-[100%] flex flex-col justify-center items-center gap-4  my-8">
            <FaqSection />

            </div>
        </div>
        <Supportcomp />
        <Footer/>
        </>
    );
};

export default Faq;