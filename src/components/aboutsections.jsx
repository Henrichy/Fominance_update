import React from 'react'
import Techie from './../assets/techman.svg'
import HappyMan from './../assets/happyMan.svg'
import Flagman from  './../assets/flagMan.svg'



const aboutsections = () => {
  return (
    <div className='text-platformHeader'>
        {/* first section */}
      <div className=''>
        <div className=' bg-platformBg h-[610px] w-[1433px] mx-auto rounded-2xl my-[80px] flex  '>
            <div className='w-[759px] h-[759px] mx-[100px] mt-[180px] text-center text-platformHeader  '>
                <h1 className='font-[600] text-[43px] leading-[62px]'>
                Who we are.
                </h1>
                <p className='font-[500] text-[20px] leading-[40px] pt-[30px]'>
                We're more than just a platform for gift cards. We're a team of passionate individuals dedicated to redefining the gifting experience. Our mission is simple: to spread joy and make gifting easy, convenient, and memorable for everyone, everywhere.
                </p>
            </div>
            <div className='flex flex-col justify-between'>
                <div></div>
                <img src={Techie} alt="" className=''/>

            </div>
        </div> 
      </div>
      {/* second section */}
      <div className=''>
        <div className=' bg-discoverBg h-[550px] w-[1433px] mx-auto rounded-2xl my-[80px] flex  '>
            <div className='flex flex-col justify-between'>
                    <div></div>
                    <img src={HappyMan} alt="" className='mx-[50px] pb-[50px]'/>

                </div>
                <div className='w-[759px] h-[759px] mx-[100px] mt-[150px] text-center text-platformHeader'>
                    <h1 className='font-[600] text-[43px] leading-[62px]'>
                    Our Mission.
                    </h1>
                    <p className='font-[500] text-[20px] leading-[40px] pt-[30px]'>
                    Our mission is to simplify and elevate the art of gifting by providing a curated selection of digital gift cards for every occasion, delivering convenience, personalization, and delight to our users while fostering connections and spreading happiness.
                    </p>
                </div>
          
        </div> 
      </div>
      {/* third section */}
      <div className=''>
        <div className=' bg-platformBg h-[610px] w-[1433px] mx-auto rounded-2xl my-[80px] flex  '>
            <div className='w-[759px] h-[759px] mx-[100px] mt-[180px] text-center text-platformHeader '>
                <h1 className='font-[600] text-[43px] leading-[62px]'>
                Our Vision.
                </h1>
                <p className='font-[500] text-[20px] leading-[40px] pt-[30px]'>
                To become the premier destination for effortless and joyful gifting experiences, connecting people worldwide through the power of thoughtful gestures and meaningful connections.
                </p>
            </div>
            <div className='flex flex-col justify-between'>
                <div></div>
                <img src={Flagman} alt="" className=''/>

            </div>
        </div> 
      </div>
      


      
    </div>
  )
}

export default aboutsections;
