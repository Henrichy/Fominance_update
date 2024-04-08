import React from 'react'
import Playst from "../assets/Playst.png"
import appst from "../assets/appst.png"

const downloadbtn = () => {
  return (
    <div className="flex gap-10 mt-10 justify-center">
      <div className='bg-buttoncolor rounded-2xl pointer flex items-center px-4 py-2 text-white gap-6 text-xl '>
        <div><img src={Playst} alt="" /></div>
        <div  className='mr-6'><small>Download it on</small> <br/> <strong>Google Play</strong> </div>
        </div>      
        <div className='bg-buttoncolor rounded-2xl pointer flex items-center px-4 py-2 text-white gap-6 text-xl'>
        <div><img src={appst} alt="" /></div>
        <div className='mr-6'><small>Download it on the</small> <br/> <strong>App Store</strong> </div>
        </div> 
      </div>
  )
}

export default downloadbtn;
