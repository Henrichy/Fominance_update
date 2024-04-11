import React from 'react'
import rectan from '../assets/rectan.png'
import formsign from '../assets/formsign.png'
import MenAni from '../assets/MenAni.svg'
import './signup.css'

const SignUp = () => {
  return (
    <div className='signup flex'>
        <div className='relative w-[40%]'>
        <img className='absolute top-10' src={formsign} alt="" />
        <img className='w-[88%] h-screen' src={rectan} alt="" />
        <img className='absolute bottom-10' src={MenAni} alt="" />
        </div>

        <div className='py-6 pl-20 pr-16 w-[54%]'>
            <div className='bg-white  flex p-10 flex-col items-center gap-2 rounded-lg w-full h-full'>
                <div><h2 className='text-2xl font-semibold'>Let Us get to know you!</h2></div>
                <div><h2 className='font-semibold'>Tell us a bit about yourself. It’s super-simple, we Promise.</h2></div>
                <form className='w-[100%]  flex flex-col gap-6 mt-10' action="">
                <div className='w-[100%] flex start flex-col'>    
        <label className='mb-3' for="username">Username</label>
        <div className='h-[45px] toround rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="text" id="username"/></div>
        </div>
        <div className='w-[100%] flex start flex-col'>    
        <label className='mb-3' for="emailaddress">Email Address</label>
        <div className='h-[45px] toround rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="text" id="emailaddress"/></div>
        </div>
        <div className='w-[100%] flex start flex-col'>    
        <label className='mb-3' for="password">Password</label>
        <div className='h-[45px] toround rounded-md w-[100%] bg-none flex items-center px-5'><input className="focus:outline-none bg-transparent w-[100%]" type="password" id="password"/></div>
        </div>
        <div className='flex flex-col justify-center items-center mt-14'><button className='signbutton bg-blue-600 px-6 py-2 rounded-md font-semibold text-white w-[60%]'>Sign Up</button>
        <h3 className='text-sm'>Already have an account? <a className='text-blue-600' href="/signin">Login Here</a> </h3>
        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp;
