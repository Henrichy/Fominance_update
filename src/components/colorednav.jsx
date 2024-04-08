import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import Logo from "./../assets/Used Logo.svg"
import { Link } from "react-router-dom";


function Colorednav() {
  return (
    <>
    
        <div className="colored bg-colorednavbg font-semibold py-4  w-full flex justify-around items-center pt-[30px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
         <div>
          <input type="" placeholder="Search here" className=" w-[376px] px-[20px] py-[8px] border-solid border-white bg-colorednavbg colored border-[1px] rounded-md placeholder-white font-light "/>
         </div>
    <NavLink to="/about" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      About Us
    </NavLink>
    <NavLink to="/Giftcards" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      Giftcards
    </NavLink>
    <NavLink to="/Community" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      Community
    </NavLink>
    <NavLink to="/Support" activeClassName="active" className="nav text-white flex justify-center items-center h-full ">
      Support
    </NavLink>

    <Link to="/Account" activeClassName="active" className=" text-white flex justify-center items-center h-full bg-heroBlue px-[40px] py-[13px]  rounded-full font-semibold hover:bg-white hover:text-btnBlue transition ease-linear duration-[0.3s]">
      My Account
      </Link>
    
  </div>
  </>

  )
}
export default Colorednav;


