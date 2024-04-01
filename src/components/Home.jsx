import React from "react";
import Head from "./Nav";
// import Footer from "./footer";
import Hero from "./Hero";
import saly from "./../assets/saly.svg";
import Saly2 from "./../assets/sally2.svg"


function Home (){
    return(
        <div>
          <Head/>
          <Hero/>

          {/* Number 1 platform section */}
          <div>
            <div className=" flex justify-between bg-platformBg h-[696px] w-[1550px] rounded-2xl mx-auto my-[80px] ">
              <div className="flex-grow p-[50px]">
                <h1 className="text-[48px] font-[500]  text-platformHeader w-[800px] leading-[62px] h-[121px]">
                  No 1 platform for Giftcard trading.
                </h1>
                <h2 className="text-platformHeader text-[24px] font-[500] leading-[40px] w-[534px] mt-9 h-[79px] ">
                  Join over 100,000 users across the globe to trade Giftcards effortlessly.
                </h2>

                {/* this is the display of the cards for selling points */}
                  <div className=" grid grid-cols-2 my-[55px]">
                     <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white">01</span>
                      
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Wide Selection</span>
                      </div>                     
                    </div>
                    <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                        <span className="text-[16px] font-[500] leading-[20px] text-white">02</span>
                      </div> 
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Instant Delivery</span>
                      </div>                    
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 my-[50px] ml-[150px]">
                     <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white">03</span>
                      </div> 
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Seamless Payments</span>
                      </div>                     
                    </div>
                    <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                        <span className="text-[16px] font-[500] leading-[20px] text-white">04</span>
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Promotionall Offers</span>
                      </div> 
                    
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 my-[50px]">
                     <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white">05</span>
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">24/7 Support</span>
                      </div>                      
                    </div>
                    <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                        <span className="text-[16px] font-[500] leading-[20px] text-white">06</span>
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Amazing Deals</span>
                      </div> 
                    
                    </div>
                  </div>
               
              </div>

             {/* this is the second part of the grid in this section */}
             <div className="flex-grow  ">
                <img src={saly} alt="" className="    h-[695px] w-[800px] " />
              </div>
            </div>
          </div>

          {/* Discover more possibilities section */}

          <div>
          <div className="pink flex flex-col justify-between bg-discoverBg h-[700px] w-[1550px] rounded-2xl mx-auto my-[80px]">
  <div className="flex justify-between flex-grow">
    {/* first side of flex */}
    <div className="flex-grow text-platformHeader">
      <div className="w-[750px] h-[262px]">
        <div className="pt-[30px] pl-[30px]">
          <h1 className="font-[600] text-[48px] leading-[62px] mt-[10px] ml-[20px]">Discover more possibilities with Fominance</h1>
          <h3 className="text-[24px] font-[500] mt-[20px] pt-[10px] ml-[20px]">Unlock endless gifting opportunities</h3>
          <button className="rounded-full w-[200px] h-[60px] mt-[40px] ml-[20px] py-[13px] px-[40px] bg-btnBlue text-white text-[20px] font-[600]">Learn More</button>
        </div>
      </div>
    </div>
    {/* second side of flex */}
    <div className="flex-grow">
      {/* Content of the second flex side */}
    </div>
  </div>
  {/* Image at the bottom left */}
  <div className="self-start">
    <img src={Saly2} alt="" className="rounded-bl-xl" />
  </div>
</div>
          </div>
        </div>
       

    )
}

export default Home;