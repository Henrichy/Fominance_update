import React, { useState } from 'react';
import Signup from './../assets/Signup.svg';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (errorMessage) {
      setErrorMessage(''); // Clear error message when user is typing
    }
  };

  const handleSignup = () => {
    if (!email.includes('@')) {
      setErrorMessage('Invalid email: Missing @ symbol.');
    } else {
      // Proceed with further validation or form submission
      console.log("Form can be submitted now!");
    }
  };

  return (
    <div className='flex bg-loginbg'>
      <div>
        <Link to='/'>
        <img src={Signup} alt="" />
        </Link>  
      </div>

      <div className='bg-white rounded-2xl w-[644px] h-[566px] mx-auto my-auto flex flex-col p-[20px]'>
        <div>
          <div className='text-center'>
            <h1 className='font-[500] text-[32px] leading-[38.73px] mt-[40px]'>
              Let Us get to know you!
            </h1>
            <h3 className='font-[500] text-[20px] leading-[24.2px] mt-[20px]'>
              Tell us a bit about yourself. It’s super-simple, we Promise.
            </h3>
          </div>
          <div className='px-6 mt-[40px]'>
            <p>Email</p>
            <input
              type="text"
              className='w-[546px] h-[60px] border-solid border-[1px] border-gray-400 px-3 rounded-lg mt-[3px]'
              value={email}
              onChange={handleEmailChange}
            />
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <p className='mt-[20px]'>Password</p>
            <input
              type="password"
              className='w-[546px] h-[60px] border-solid border-[1px] px-3 border-gray-400 rounded-lg mt-[3px]'
            />
          </div>
          <div className='text-center mt-[50px]'>
            <button
              className='bg-heroBlue h-[48px] w-[380px] rounded-xl text-white font-[600] text-[20px] mb-[5px]'
              onClick={handleSignup}
            >
              Sign Up
            </button>
            <p>
              Already have an account?
              <Link to='/signin'>
                <span className='text-heroBlue'>Login here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm;