import React from 'react'
import Saly2 from "./../assets/saly2.svg"
import Check from "./../assets/check.svg";

const Usp2 = () => {
  return (
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
  )
}

export default Usp2;
