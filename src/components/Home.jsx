import React from "react";
import Head from "./Nav";
import Footer from "./footer";
import Hero from "./Hero";
import saly from "./../assets/saly.svg";
<<<<<<< HEAD
=======
import Saly2 from "./../assets/saly2.svg";

import check from "./../assets/check.svg"



>>>>>>> 23cfa30fc5a9cd29d5ed1fdfdc9fbf803d3140c5


import Check from "./../assets/check.svg"
import Saly9 from "./../assets/Saly9.svg"
import Saly10 from "./../assets/Saly10.svg"
import Saly31 from "./../assets/Saly31.svg"
import Saly32 from "./../assets/Saly32.svg"


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
<<<<<<< HEAD
          

        </div>
=======

          {/* Discover more possibilities section */}

          {/* parent Div */}
          <div> 
            {/* child div */}

            <div className=" w-[1362px] flex flex-col justify-between bg-discoverBg rounded-2xl h-[696px] mx-auto" >

              {/* made a grid top and bottom */}
              {/* TOP */}
            <div className="flex-grow flex flex-col-2">
              
              <div className="flex-grow pl-[50px] pt-[50px] text-platformHeader w-[300px]">
                <div className="">
                <h1 className="font-[600] text-[40px] leading-[62px]  w-[650px]  " >

                  Discover more possibilities with Fominance
                </h1>
                <h3 className="font-[500] text-[24px] leading-[40px] mt-[20px] w-[720px] ">
                  Unlock endless gifting opportunities
                </h3>
                <button className=" rounded-full w-[13rem] h-[4.0rem] bg-btnBlue px-[40px] py-[13px] font-[600] text-[20px] text-white mt-[30px]">
                    Learn More
                  </button>
                </div>

               <img src={Saly2} alt="" className="h-auto w-[840px] overflow-none mt-[75px] rounded-bl-2xl" />



              </div>
              <div className="flex-grow">
              <div className="flex-grow" >

               







                  <div className="  mt-[100px] ml-[13rem]">
                     <div className="flex items-center bg-white w-[296px] h-[94px] p-6 rounded-2xl">
                      <div className="w-10 h-10 bg-discoverpink rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white "><img src={Check} alt="" /></span>
                      
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-discovertxt font-[400] text-[24px] leading -[32.69px]">Send Giftcard</span>
                      </div>                     
                    </div>
                   
                  </div>

               </div>
               <div className="flex-grow" >
                <div>
                <div className="  mt-[65px] ml-[22rem]">
                     <div className="flex items-center bg-white w-[329px] h-[94px] p-6 rounded-2xl">
                      <div className="w-10 h-10 bg-discoverpink rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white "><img src={Check} alt="" /></span>
                      
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-discovertxt font-[400] text-[24px] leading -[32.69px]">Recieve Giftcard</span>
                      </div>                     
                    </div>
                   
                  </div>
                </div>
                  

               </div>


                
              </div>
            </div>


              {/* BOTTOM */}
              <div className="flex-grow flex flex-col-2">
              
              <div className="flex-grow w-[750px] ">
                <img src={Saly2} alt="" className=" mt-[18px] mr-[2] rounded-bl-2xl " />
              </div>
              <div className="flex-grow">
              <div className="flex-grow" >
                  <div className="  my-[55px] ml-[200px]">
                     <div className="flex items-center bg-white w-[296px] h-[94px] p-6 rounded-2xl">
                      <div className="w-10 h-10 bg-discoverpink rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white "><img src={Check} alt="" /></span>
                      
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-discovertxt font-[400] text-[24px] leading -[32.69px]">Buy Giftcard</span>
                      </div>                     
                    </div>
                   
                  </div>

               </div>
               <div className="flex-grow" >
                  <div className="  my-[55px]">
                     <div className="flex items-center bg-white w-[397px] h-[94px] p-6 rounded-2xl">
                      <div className="w-10 h-10 bg-discoverpink rounded-full flex justify-center items-center">
                      <span className="text-[16px] font-[500] leading-[20px] text-white "><img src={Check} alt="" /></span>
                      
                      </div>
                      <div class="flex-grow text-center">
                        <span class="text-discovertxt font-[400] text-[24px] leading -[32.69px]">Store Unused Giftcards</span>
                      </div>                     
                    </div>
                   
                  </div>

               </div>


              </div>
            </div>
           
            
          
            </div>

           </div>
           {/* Our all in one giftcerd section */}
           <div>
              <div className="text-discovertxt text-center pt-[80px]" >
                <h1 className="font-[600] text-[48px] leading -[62px] p-[30px] ">
                Our all in one Giftcard sevices.
                </h1>
                <h4 className="font-[400] text-[24px] leading-[40px]">
                Your Comprehensive Destination for All Your Gift Card Needs, from Selection to Delivery and Beyond!
                </h4>
                {/* Grid layout */}
                <div class="grid grid-cols-2 gap-[100px] px-[50px] pt-[50px] w-[1460px] mx-auto text-discovertxt">
                  <div class="bg-gridleft text-white p-4 rounded-2xl h-[547px] w-[640px] align-center">
                    <div className="text-discovertxt p-[20px]">
                      <img src={Saly31} alt="" className="mx-auto"/>
                      <h1 className="font-[600] text-[40px] leading-[62px]" >
                      Fast Share.
                      </h1>
                      <p className="font-[500] text-[20px] leading-[40px] mt-[20px]">
                      Share Giftcard instantly with fominance family.
                      </p>
                    </div>
                  </div>
                  <div class="bg-gridright text-white p-4 rounded-2xl h-[547px] w-[640px]">
                    <div className="text-discovertxt p-[20px]">
                      <img src={Saly32} alt="" className="mx-auto"/>
                      <h1 className="font-[600] text-[40px] leading-[62px] mt-[25px]" >
                      Reward Points.
                      </h1>
                      <p className="font-[500] text-[20px] leading-[40px] mt-[20px]">
                      Get rewarded for every purchase you make.
                      </p>
                    </div>
                  </div>
                  <div class="bg-gridleft text-white p-4 rounded-2xl h-[547px] w-[640px]">
                    <div className="text-discovertxt p-[20px]">
                      <img src={Saly10} alt="" className="mx-auto"/>
                      <h1 className="font-[600] text-[40px] leading-[62px] mt-[60px]" >
                      Storage Space
                      </h1>
                      <p className="font-[500] text-[20px] leading-[40px] mt-[30px]">
                      Store your unused Giftcard in your wallet for easy access.
                      </p>
                    </div>
                  </div>
                  <div class="bg-gridright text-white p-4 rounded-2xl h-[547px] w-[640px]">
                    <div className="text-discovertxt p-[30px]">
                      <img src={Saly9} alt="" className="mx-auto"/>
                      <h1 className="font-[600] text-[40px] leading-[62px] mt-[50px]" >
                      User ID.
                      </h1>
                      <p className="font-[500] text-[20px] leading-[40px] mt-[20px]">
                      Get a personalized user ID. that can be used to transact easily anywhere in the world
                      </p>
                    </div>
                  </div>
                </div>


              </div>
           </div>
           <div className=" text-center pt-[150px]">
            <h1 className="font-[600] text-[48px] leading-[62px]">
            Have your Giftcard trading convinently accessible
            </h1>
            <h3 className="font-[500] text-[32px] leading-[72px] pt-[30px]">
            Download our mobile app and purchase faster
            </h3>
            
           </div>
        <Footer />
       </div>
>>>>>>> 23cfa30fc5a9cd29d5ed1fdfdc9fbf803d3140c5

    )
}

export default Home;