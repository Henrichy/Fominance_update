import React from "react";
import Footer from "./footer";
import Head from "./Nav";
import sallyA from "../assets/Saly14.svg"
import icon from "../assets/icon.png"

import './affiliate.css'
import './blog.css'
import './Faq.css'





function Faq (){
    return (
        <>
        <Head /> 
       
        <div className=' theboxfaq flex flex-col h-[750px]'>
            <div className='relative justify-center flex h-auto w-[100%]'>
            <img className='absolute w-[100%] top-0 h-[750px]' src={sallyA} alt="" />
            <h1 className='absolute flex text-gray-700 font-bold text-5xl top-[50px]'>How might we <h2 className="text-orange-300">&nbsp; help you?</h2></h1>

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
        <Footer/>
        </>
    );
};

export default Faq;