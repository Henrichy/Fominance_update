import React from "react";
import Head from "./Nav";
// import Footer from "./footer";
import Hero from "./Hero";
import saly from "./../assets/saly.svg";


function Home (){
    return(
        <div>
          <Head/>
          <Hero/>
          <div>
            <div className=" flex justify-between bg-platformBg h-[696px] w-[1550px] rounded-2xl mx-auto my-[80px] ">
              <div className="flex-grow p-[50px]">
                <h1 className="text-[48px] font-[500]  text-platformHeader w-[800px] leading-[62px] h-[121px]">
                  No 1 platform for Giftcard trading.
                </h1>
                <h2 className="text-platformHeader text-[24px] font-[500] leading-[40px] w-[534px] mt-9 h-[79px] ">
                  Join over 100,000 users across the globe to trade Giftcards effortlessly.
                </h2>
              </div>
              <div>
                <img src={saly} alt="" className=" pt-5 " />
              </div>
            </div>
          </div>
          

        </div>

    )
}

export default Home;