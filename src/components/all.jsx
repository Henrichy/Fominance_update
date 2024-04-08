import React from 'react'
import Saly9 from "./../assets/Saly9.svg";
import Saly10 from "./../assets/Saly10.svg";
import Saly31 from "./../assets/Saly31.svg";
import Saly32 from "./../assets/Saly32.svg";


const allOne = () => {
  return (
     
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
  )
}

export default allOne;
