import React from "react";
import Nav from "./Nav";
import Footer from "./footer";





function Faq (){
    return (
        <>
        <Nav/>
        <SubNav pageTitle="FAQ"/>
    
        <div className="bg-orange-50   " >
            <div className="mx-16 py-20">
                <h1 className=" text-blue-800 font-bold text-4xl ">Frequently asked questions.</h1>
            
            <p className="py-5">We Have Answers to Your Most Common Questions: From how to purchase gift cards to redeeming them, managing your account, and more, we're here to provide detailed solutions for every query, ensuring your experience is seamless and hassle-free.</p>
           
            </div>
             {/* make a grid and input the img and txt */}
            <div className=" grid grid-cols-1 gep-4">
                <div>
                    <h1>grid 1</h1>
                </div>
                <div>
                    <h1>grid 2</h1>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Faq;