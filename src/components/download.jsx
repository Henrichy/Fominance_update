import React from 'react'
import Phones from "./../assets/phones.svg"
import Community from "./../assets/community.svg"
import Downloadbtn from './downloadbtn'

const download = () => {
  return (
    <div className=" text-center pt-[150px] text-platformHeader">
        <h1 className="font-[600] text-[48px] leading-[62px]">
        Have your Giftcard trading convinently accessible
        </h1>
        <h3 className="font-[500] text-[32px] leading-[72px] pt-[30px]">
        Download our mobile app and purchase faster
        </h3>
        <Downloadbtn/>
        <div>

        </div>
        <div>
      <img src={Phones} alt="" className="mx-auto" />
        </div>
        <div className=" bg-joinbg flex items-center justify-center py-6 ">
      <img src={Community} alt="" />
      <h1 className="ml-2 font-[800] text-[32px] leading-[40px]">Join the community! </h1>  
      <p className="ml-2 font-[400] text-[30px] leading-[37.5px] text-joinp"> lets explore endless gifting possibilities together.</p>
        </div>
    
    </div>
  )
}

export default download;
