import React, { useState } from 'react';
import rectan from '../assets/rectan.png';
import formsign from '../assets/formsign.png';
import MenAni from '../assets/MenAni.svg';
import errorImage from '../assets/errorImage.png';
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  // Regex to check for "@" in the username
  const usernameRegex = /@/;

  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Username validation for "@"
    if (!usernameRegex.test(username)) {
      setErrorMessage('<img src="' + errorImage + '" alt="Error" />&nbsp; Email must contain @.');
      return;
    }

    // Password validation: letters, numbers, and special characters
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('<img src="' + errorImage + '" alt="Error" />&nbsp; Password not strong. It should contain alphanumeric characters and special characters.');
      return;
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
    <div className='bg-loginbg flex'>
      <div className='relative w-[40%]'>
        <a href="/"> <img className='absolute top-10' src={formsign} alt="" /></a>
        <img className='w-[88%] h-screen' src={rectan} alt="" />
        <img className='absolute bottom-10' src={MenAni} alt="" />
      </div>

      <div className='py-6 pl-20 pr-16 w-[54%] '>
        <div className='bg-white  flex p-10 flex-col items-center gap-2 rounded-2xl w-[644px] h-[566px] mt-[150px] mx-auto'>
          <div><h2 className='text-2xl font-semibold'>Let Us get to know you!</h2></div>
          <div><h2 className='font-semibold'>Tell us a bit about yourself. It’s super-simple, we Promise.</h2></div>
          <form className='flex flex-col gap-6 mt-5 w-[546px]' onSubmit={handleSignUp} action='/signin.jsx' method='post'>
            <div className='w-[100%] flex start flex-col'>    
              <label className='mb-3' htmlFor="emailaddress">Email Address</label>
                <input className="focus:outline-textfield bg-transparent w-[546px] h-[60px] border-solid border-gray-500  border-[1px] rounded-xl p-4 mx-auto" type="text" id="emailaddress" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            {emailError && (
              <p className="text-red-500 text-l  mt-2">⚠️  Incorrect email format</p>
            )}
            <div className='w-[100%] flex start flex-col'>    
              <label className='mb-3' htmlFor="password">Password</label>
             
                <input className="focus:outline-textfield bg-transparent w-[546px] h-[60px] border-solid border-gray-500  border-[1px] rounded-xl p-4 mx-auto" type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            
            <div className='text-right'>
              <Link to="/forgot-password">
                <span className='text-heroBlue'>Forgot password?</span>
              </Link>
            </div>
            {errorMessage && <div className="text-red-600 flex" dangerouslySetInnerHTML={{ __html: errorMessage }}></div>}
            

            <div className='flex flex-col justify-center items-center mt-1'>
              <input className='hover:opacity-[85%] transition-all duration-[0.3s] ease-linear  signbutton bg-heroBlue h-[48px] px-6 py-2 rounded-md font-semibold text-white w-[380px]'value='Sign Up' type="submit" />
              <h3 className='text-sm mt-[10px]'>Already have an account? <a className='text-blue-600 mt-' href="/signin">Login Here</a> </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;