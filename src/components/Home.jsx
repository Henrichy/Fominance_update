import React from "react";
import Head from "./Nav";
import Footer from "./footer";
import Hero from "./Hero";
import saly from "./../assets/saly.svg";
import Saly2 from "./../assets/saly2.svg";
import Check from "./../assets/check.svg";
import Saly9 from "./../assets/Saly9.svg";
import Saly10 from "./../assets/Saly10.svg";
import Saly31 from "./../assets/Saly31.svg";
import Saly32 from "./../assets/Saly32.svg";
import Support from "./Supportcomp";
import Phones from "./../assets/phones.svg"
import Community from "./../assets/community.svg"
import TestimonialCarousel from "./Testimonial";
import Jace from "./../assets/jace.svg"
import Sophia from "./../assets/sophia.svg"
import Abbie from "./../assets/abbie.svg"



const testimonials = [
  { name: 'Jace',
    text: 'Absolutely love this gift card web app! Super easy to use, and the variety of gift card options is fantastic',
    rating: 4,
    imageUrl:Jace,
  },
  { name: 'Sophia',
    text: 'Fominance is absolutely the best! i was sceptical at first, but now, i have no regrets',
    rating: 5,
    imageUrl:Sophia,
  },
  { name: 'Sophia',
    text: 'Such a fun and convenient way to send gifts! My friends always appreciate receiving their favorite gift cards through this app. Highly recommend!',
    rating: 5,
    imageUrl:Sophia,
  },
  { name: 'Abbie',
    text: 'Fominance is absolutely the best! i was sceptical at first, but now, i have no regrets',
    rating: 5,
    imageUrl:Abbie,
  },
  
];


function Home (){
    return(
      
        <div className="" >
          <Head/>
          <Hero/>

          {/* Number 1 platform section */}
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
           <div className=" text-center pt-[150px] text-platformHeader">
            <h1 className="font-[600] text-[48px] leading-[62px]">
            Have your Giftcard trading convinently accessible
            </h1>
            <h3 className="font-[500] text-[32px] leading-[72px] pt-[30px]">
            Download our mobile app and purchase faster
            </h3>
            {/* download button for google and playstore */}
            <div>

            </div>
            <div>
              <img src={Phones} alt="" className="mx-auto" />
            </div>
            <div className=" bg-joinbg flex items-center justify-center py-6">
              <img src={Community} alt="" />
              <h1 className="ml-2 font-[800] text-[32px] leading-[40px]">Join the community! </h1>  
              <p className="ml-2 font-[400] text-[30px] leading-[37.5px] text-joinp"> lets explore endless gifting possibilities together.</p>
            </div>
            
           </div>
           {/* testimonial section */}
           <div className=" bg-platformBg text-center pt-[50px]">
            <h1 className=" font-[600] text-[48px] leading-[62px] ">
            Our Customers say it best.
            </h1>
            <h3 className="font-[400] text-[24px] leading-[40px] mt-[30px]">
            Why over 100,000 customers choose us.
            </h3>
            <TestimonialCarousel testimonials={testimonials} />
           </div>
           <Support/>
           <Footer/>
        
       </div>

    )
}

export default Home;
