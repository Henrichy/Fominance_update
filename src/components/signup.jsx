import React, { useState } from 'react';
import rectan from '../assets/rectan.png';
import formsign from '../assets/formsign.png';
import MenAni from '../assets/MenAni.svg';
import errorImage from '../assets/errorImage.png';
import {Link} from 'react-router-dom'
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);


  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Username validation: letters and numbers
    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      setErrorMessage('<img src="' + errorImage + '" alt="Error" />&nbsp; Username must contain at least one letter and one number.');
      return;
    }

    // Password validation: letters, numbers, and special characters
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('<img src="' + errorImage + '" alt="Error" />&nbsp; Password not strong. It should contain Alphanumeric character.')
    }

    if (!validateEmail(email)) {
        setEmailError(true);
      } else {
        setEmailError(false);
        
      }

    // If validation passes, you can proceed with signing up the user
    // Add your sign-up logic here
  };


  return (
    <div className='signup flex'>
      <div className='relative w-[40%]'>
        <a href="/"> <img className='absolute top-10' src={formsign} alt="" /></a>
        <img className='w-[88%] h-screen' src={rectan} alt="" />
        <img className='absolute bottom-10' src={MenAni} alt="" />
      </div>

      <div className='py-6 pl-20 pr-16 w-[54%]'>
        <div className='bg-white  flex p-10 flex-col items-center gap-2 rounded-lg w-full h-full'>
          <div><h2 className='text-2xl font-semibold'>Let Us get to know you!</h2></div>
          <div><h2 className='font-semibold'>Tell us a bit about yourself. It’s super-simple, we Promise.</h2></div>
          <form className='w-[100%]  flex flex-col gap-6 mt-5' onSubmit={handleSignUp} action='/signin.jsx' method='post'>
            <div className='w-[100%] flex start flex-col'>    
              <label className='mb-3' htmlFor="username">Username</label>
              <div className='h-[45px] border-[1px] toround rounded-md w-[100%] bg-none flex items-center px-5'>
                <input className="focus:outline-none bg-transparent w-[100%]" type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <div className='w-[100%] flex start flex-col'>    
              <label className='mb-3' htmlFor="emailaddress">Email Address</label>
              <div className='h-[45px] toround border-[1px] rounded-md w-[100%] bg-none flex items-center px-5'>
                <input className="focus:outline-none bg-transparent w-[100%]" type="text" id="emailaddress" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            {emailError && (
              <p className="text-red-500 text-l  mt-2">⚠️  Incorrect email format</p>
            )}
            <div className='w-[100%] flex start flex-col'>    
              <label className='mb-3' htmlFor="password">Password</label>
              <div className='h-[45px] toround border-[1px] rounded-md w-[100%] bg-none flex items-center px-5'>
                <input className="focus:outline-none bg-transparent w-[100%]" type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='text-right'>
              <Link to="/forgot-password">
                <span className='text-heroBlue'>Forgot password?</span>
              </Link>
            </div>
            {errorMessage && <div className="text-red-600 flex" dangerouslySetInnerHTML={{ __html: errorMessage }}></div>} {/* Display error message */}

            <div className='flex flex-col justify-center items-center mt-1'>
              <input className='signbutton bg-blue-600 px-6 py-2 rounded-md font-semibold text-white w-[60%]'value='Sign Up' type="submit" />
              <h3 className='text-sm'>Already have an account? <a className='text-blue-600' href="/signin">Login Here</a> </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
