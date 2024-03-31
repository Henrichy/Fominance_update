import React from "react";
import HeroImg from "./../assets/heroImg.svg"

function Hero (){
    return(
        <div className="bg-heroBlue text-center ">
            <h1 className="text-white font-[600] text-[64px] text-center pt-[80px]">Welcome to Fominance!</h1>
            <h2 className="text-white text-[40px] font-[500] text-center">Your home of all things Giftcard.</h2>
            <button className=" border-[1px] border-solid border-btnBlue text-white rounded-full w-[162px] h-[50px] mx-auto mt-7 hover:bg-btnBlue transition ease-linear ">Get Started</button>
            <img src={HeroImg} alt="" className="mx-auto "/>
                
            

        </div>

    )

}

export default Hero;