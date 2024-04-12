import React from 'react'
import Saly1 from "./../assets/minijet.svg"
import Saly2 from "./../assets/jetmini1.svg"
import Globe from "./../assets/globe.svg"

const aboutHero = () => {
  return (
    <div className=''>
      <div className=' bg-colorednavbg text-center mt-[0px]'>  
        <h1 className='text-abtHeroH font-[500] text-[64px] leading-[80px] py-6  '>
        Transforming the world of gifting.
        </h1>
        <h3 className='font-[400] text-[40px] text-abtHeroP leading-[36px] py-6'>
        Redefining the Share of Joy Around the Globe!
        </h3>
        <h4 className='font-[500px] text-abtHeroH text-[24px] leading-[32.69px] py-6'>
          100% internet
        </h4>
        <div className='flex justify-between '>
          <img className="" src={Saly1}  alt="" />
          <img className="" src={Saly2} alt="" />
          <img className=" mr-[150px] mb-[auto] " src={Globe} alt="" />
        </div>
      </div>
      <div className=''>
        <div className=' bg-platformBg h-[696px] w-[1362px] mx-auto rounded-2xl my-[50px] flex'>
          <div>
            <h1>
              
            </h1>
          </div>
          <div>

          </div>
        </div> 
      </div>
    </div>
  )
}

export default aboutHero;
