import React from 'react';
import saly from "./../assets/saly.svg";


const usp1 = () => {
  return (
    
      <div>
            <div className=" flex justify-between bg-platformBg h-[696px] w-[1362px] rounded-2xl mx-auto my-[80px] ">
              <div className="flex-grow pt-[50px] pl-[50px] w-[45rem]">
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
                  <div className=" grid grid-cols-2 my-[50px] ">
                     <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full ml-[80px]">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white">03</span>
                      </div> 
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Seamless Payments</span>
                      </div>                     
                    </div>
                    <div className="flex items-center bg-white w-[264px] h-[66px] p-3 rounded-full ml-[80px]">
                      <div className="w-10 h-10 bg-uspColor rounded-full flex justify-center items-center">
                        <span className="text-[16px] font-[500] leading-[20px] text-white">04</span>
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-uspColor font-bold">Promotional Offers</span>
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
    
  )
}

export default usp1;
