import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import Logo from "./../assets/Used Logo.svg"
import { Link } from "react-router-dom";


function Head() {  
    const handleClick = (e) => {
      e.preventDefault(); // Prevent default action
      // Optionally, you can push a new URL to history if needed
      // history.push('/support/contact');
    };

  return (
    <>
    <div></div>
        <div className=" font-semibold py-4 bg-heroBlue w-full flex justify-around items-center pt-[30px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
         <div>
         <input
          type="text"
          placeholder="Search here"
          className="w-[376px] px-[20px] py-[8px] border-solid border-white bg-heroBlue border-[1px] rounded-md placeholder-white font-light caret-white text-white focus:outline-none"
         />
         </div>
    <NavLink to="/about" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      About Us
    </NavLink>
    <NavLink to="/giftcards" activeClassName="active" className="nav text-white flex justify-center items-center h-full">
      Giftcards
    </NavLink>
    <div className="py-[20px] relative flex justify-center">
  <NavLink
    onClick={handleClick}
    to="/community"
    activeClassName="active"
    className="nav text-white flex justify-center items-center h-full relative" 
  >
     Community
  </NavLink>
  <div className="absolute bg-white w-[150px] h-[90px] text-center rounded-md z-10 hideing flex flex-col justify-between top-[60px] text-md">
    <a href="/community/blog" className="hover:bg-gray-200 hover:rounded-t-md w-full py-2 h-full transition ease-linear duration-[0.2s]">Blog&nbsp;Post</a>
    <a href="/community/affiliate" className="hover:bg-gray-200 hover:rounded-b-md w-full h-full py-2 transition ease-linear duration-[0.2s]">Affiliate</a>
  </div>
</div>

<div className="py-[20px] relative flex justify-center">
  <NavLink
    onClick={handleClick}
    to="/support"
    activeClassName="active"
    className="nav text-white flex justify-center items-center h-full relative" 
  >
    Support
  </NavLink>
  <div className="absolute text-center bg-white w-[150px] h-[90px] rounded-md z-10 hiing flex flex-col justify-between  top-[50px] text-md">
    <a href="/support/faq" className="hover:bg-gray-200 hover:rounded-t-md w-full py-2 transition ease-linear duration-[0.2s]">FAQ</a>
    <a   href="/support/contact" className="hover:bg-gray-200 hover:rounded-b-md w-full py-2 transition ease-linear duration-[0.2s]">Contact&nbsp;Us</a>
  </div>
</div>


    <NavLink to="/signin" activeClassName="active" className=" text-white flex justify-center items-center h-full bg-btnBlue px-[40px] py-[13px]  rounded-full font-semibold hover:bg-white hover:text-btnBlue transition ease-linear duration-[0.2s]">
      My Account
      </NavLink>

  </div>
  </>

  )
}
export default Head;
