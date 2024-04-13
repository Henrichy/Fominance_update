import React from 'react'
import Logimage from "./../assets/Login.svg"
import Logimage2 from "./../assets/Login2.svg"

const Login = () => {
  return (
    <div className=''>
        <div className='flex bg-loginbg '>
            {/* first side of flex */}
            <div className=''>
                <img src={Logimage2} alt=""draggable="false" className='h-[982px]  '/>
            </div>
            {/* second side of flex */}
            <div className=''>
                <div className='bg-white rounded-2xl h-[740px] w-[660px]  mt-[125px] ml-[200px] py-[100px] px-[50px]'>
                    <h1 className='text-center font-[500px] text-[32px] leading-[40px]'>
                    Welcome back!
                    </h1>
                    <h3 className='font-[400] text-[20px] text-center mt-[10px]'>
                    Lets log you in to your <span className='text-loginbtn'>Fominance</span> experience
                    </h3>
                    <div className='mt-[50px]'>
                        <p className='font-[400] text-[20px]  '>
                        Username
                        </p>
                        <input type="text" className='border-solid border-[1px] border-grey-200 rounded-2xl h-[54px] w-[548px] mx-auto'/>
                        <p className='font-[400] text-[20px]'>
                        Password
                        </p>
                        <input type="text" className='border-solid border-[1px] border-grey-200 rounded-2xl h-[54px] w-[548px]'/>
                        <p></p>
                    </div>
                    <button className='w-[338px] h-[52px] py-[13px] px-[10px] bg-loginbtn rounded-2xl  text-white font-[600] text-[20px] leading-[28px]'>Log In</button>
                    <p>
                    Don’t have an account? <span className='text-loginbtn'>Sign Up here</span>
                    </p>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Login;
