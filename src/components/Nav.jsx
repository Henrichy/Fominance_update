import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import Logo from "./../assets/Used Logo.svg"
import { Link } from "react-router-dom";

function Head() {

  return (
    <>
    <div></div>
        <div className=" font-semibold py-4 bg-heroBlue w-full flex justify-around items-center pt-[30px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
         <div>
          <input type="" placeholder="Search here" className=" w-[376px] px-[20px] py-[8px] border-solid border-white bg-heroBlue border-[1px] rounded-md placeholder-white font-light caret-white text-white"/>
         </div>
    <NavLink to="/about" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      About Us
    </NavLink>
    <NavLink to="/Giftcards" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      Giftcards
    </NavLink>
    <div className="py-[20px] relative flex justify-center">
  <NavLink
    to="/community/blog"
    activeClassName="active"
    className="nav text-white flex justify-center items-center h-full relative" // Add relative class here
  >
    Community
  </NavLink>
  <div className="absolute bg-white px-8 py-2 rounded-md hideing flex justify-between gap-6 bottom-[-35px] text-lg">
    <a href="/community/affiliate">Affiliate</a>
    <a href="/community/blog">Blog</a>
  </div>
</div>

<div className="py-[20px] relative flex justify-center">
  <NavLink
    to="/support/contact"
    activeClassName="active"
    className="nav text-white flex justify-center items-center h-full relative" // Add relative class here
  >
    Support
  </NavLink>
  <div className="absolute bg-white px-8 py-2 rounded-md hiing flex justify-between gap-6 bottom-[-35px] text-lg">
    <a href="/support/contact">Contact</a>
    <a href="/support/faq">Faq</a>
  </div>
</div>


    <NavLink to="/Account" activeClassName="active" className=" text-white flex justify-center items-center h-full bg-btnBlue px-[40px] py-[13px]  rounded-full font-semibold hover:bg-white hover:text-btnBlue transition ease-linear duration-[0.2s]">
      My Account
      </NavLink>
    
  </div>
  </>

  )
}
export default Head;
