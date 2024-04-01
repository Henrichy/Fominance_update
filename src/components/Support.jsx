import React from 'react'
import Head from './Nav'
import Supportcomp from './Supportcomp'
import Robluxcomp from './Robluxcomp'
import Footer from './footer'
import './support.css'
import './Nav.css'
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png"
import linevector from "../assets/linevector.svg"
import herro from "../assets/herro.png"
import might from "../assets/might.png"
import icon from "../assets/icon.png"
import aff from "../assets/aff.png"
import paym from "../assets/paym.png"
import rew from "../assets/rew.png"
import giftt from "../assets/giftt.png"
import need from "../assets/need.png"



function Support() {
  return (
    <div>
      <Head/>
      <div className="flex items-center px-6 justify-between">
      <div className="flex items-center">
        <img className="h-24" src={logo1} alt="" />
        <img className="h-10" src={linevector} alt="" />
        <h3 className="ml-4 policy">Return Policy</h3>
      </div>
        <div className='flex items-center px-6 gap-8 justify-between'>
        <NavLink to="/support/help" activeClassName="active" className="nav text-black font-semibold flex justify-center items-center h-full">
      HELP
    </NavLink>
    <NavLink to="/support/faq" activeClassName="active" className="nav text-black font-semibold flex justify-center items-center h-full">
      FAQ
    </NavLink>
    <NavLink to="/support/returnpolicy" activeClassName="active" className="nav text-black font-semibold flex justify-center items-center h-full">
      RETURN POLICY
    </NavLink>
    <NavLink to="/support/contactus" activeClassName="active" className="nav text-black font-semibold flex justify-center items-center h-full">
      CONTACT US
    </NavLink>
        </div>
      </div>
      <div className='relative herro'>
        <img src={herro} alt="" />
        <img className='might' src={might} alt="" />
        <div className='input'>
        <div className="therelative relative flex items-center bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2">
            <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
            <input type="text" className="focus:outline-none ml-6 w-full"
              placeholder="Search the Knowledge Base"
            />
            <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
          </div>
          </div>
          <img className='absolute right-4 bottom-0' src={need} alt="" />
      </div>
      <div className='bigContainer'>
      <div className="px-20 py-8 image-containerrrr">
            <img className="categoo" src={aff} alt="Logo" />
            <img className="categoo" src={giftt} alt="Logo" />
            <img className="categoo" src={rew} alt="Logo" />
            <img className="categoo" src={paym} alt="Logo" />
          </div>
          </div>
      <Supportcomp />
      <Robluxcomp />
      <Footer />
    </div>
  )
}
export default Support;