import React, { useState } from 'react';
import Login from './../assets/Login2.svg';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  // Reset error when user starts typing again
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(false); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.endsWith('.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      
    }
  };

  return (
    <div className='bg-loginbg'>
      <div className='flex'>
        <div>
          <img src={Login} alt="" className='h-[100vh]' />
        </div>
        <div className='w-[660px] h-[740px] bg-white rounded-2xl my-auto mx-auto text-center pt-[130px]'>
          <h1 className='font-[500] text-[32px] leading-[40px]'>Welcome back!</h1>
          <h3 className='font-[400] text-[20px] leading-[27.2px] pt-[20px]'>Lets log you in to your &nbsp;
          <Link to="/">
          <span className='text-heroBlue'>Fominance</span> 
          </Link>&nbsp;
          
          experience</h3>
          <form className='pt-[50px] w-[548px] mx-auto text-left' onSubmit={handleSubmit}>
            <h4>Username</h4>
            <input 
              type="text"
              value={email}
              onChange={handleEmailChange}
              className={`w-[548px] h-[54px] border-solid  border-[1px] mt-[10px] rounded-lg p-5 ${emailError ? 'border-red-500' : ''}`}
              
            />
            {emailError && (
              <p className="text-red-500 text-[17px]  mt-2">⚠️  Incorrect email format</p>
            )}
            <h4 className='mt-[30px]'>Password</h4>
            <input 
              type="password" 
              value={password}
              onChange={handlePasswordChange}
              className='w-[548px] h-[54px] mt-[10px] border-solid border-[1px] rounded-lg p-5 focus:border-blue-200'
              
            />
            <div className='text-right mt-[10px]'>
              <Link to="/forgot-password">
                <span className='text-heroBlue'>Forgot password?</span>
              </Link>
            </div>
            <button type="submit" className='bg-heroBlue  text-white w-[380px] h-[48px] rounded-xl mt-[50px] mx-auto block'>Log In</button>
          </form>
          <div className='mt-[20px]'>
            <h4>Do not have an account? <Link to="/signup" className='text-heroBlue'>Signup Here</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;