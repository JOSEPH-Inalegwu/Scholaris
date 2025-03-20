import React from 'react'
import PasswordInput from '../Utils/Visibility'

const Login = () => {
  return (
    <>
<div className="bg-white md:min-h-screen flex justify-center">
  {/* Image Section */}
  <div className="hidden bg-cover lg:block lg:w-2/4 h-screen">
    <div className="relative flex items-center h-full px-20 overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 bg-[url('src/assets/Image/pexels-kalmshoota-1184580.jpg')] bg-cover bg-center filter blur-sm" />
      
      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#027451] opacity-50" />
      
      <div className='space-y-14 relative z-10'> 
        <div className="max-w-2xl px-8 py-7 bg-white rounded-lg shadow-md dark:bg-[#066649]">
          <div className="mt-2 space-y-3">
            <img src="src/assets/graduation-cap.svg" 
            alt="" 
            className='w-15 h-15 mx-auto'
            />
            <h4 className="text-2xl font-bold text-gray-700 dark:text-white">Welcome to the Scholaris Portal</h4>
            <p className='text-gray-500 dark:text-gray-300 text-sm'>
              Empowering students at <b>Nasarawa State University</b> to excel in their studies.
              Access a comprehensive collection of past questions to enhance your learning experience.
            </p>
          </div>
        </div>

        <div className="max-w-2xl px-8 py-6 bg-white rounded-lg shadow-md dark:bg-[#066649]">
          <div className="mt-2">
            <img src="src/assets/quote-open-editor-svgrepo-com.svg" alt="" className='w-5 h-5 mx-auto text-white' />
            <h2 className="font-semibold italic text-center text-gray-700 dark:text-white">Practice, Progress, Succeed.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Form Section */}
  <div className="flex items-center px-6 w-full py-12 md:py-0 mt-5 md:mt-0 mx-4 md:mx-auto lg:w-3/8 border border-gray-200 rounded-lg shadow-2xl">
    <div className="flex-1">
      <div className="text-center md:text-left">
        <h3 className="mt-0 text-3xl md:text-4xl font-semibold md:font-bold text-[#066649]">Welcome Back!</h3>
        <p className='text-gray-500 mt-2'>Please login to continue</p>
      </div>

      <div className="mt-6">
        <form>
          <div className="relative">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-400 text-end mx-3">User ID</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-[#066649] focus-within:ring-1 focus-within:ring-[#066649]"> 
              <img src="src/assets/user.svg" alt="User icon" className="w-5 h-5 mx-2" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="userID"
                className="block capitalize w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 focus:outline-none"
              />
            </div>
          </div>
          
          {/* Password */}
          <div className="mt-6">
            <PasswordInput />
          </div>

            {/* Forgot Password */}
          <div className='mt-6'>
            <p className='font-medium'>
                <a href="#" className="text-sm text-[#0b9b70] hover:underline focus:outline-none">Forgot password?</a>
            </p>
          </div>
          
          {/* Sign in */}
          <div className="mt-6">
            <button className="w-full px-4 font-semibold py-3 tracking-wide text-white transition-colors duration-300 transform bg-[#066649] rounded-lg hover:bg-[#386155] focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50">
              Sign in
            </button>
          </div>

        </form>

        <p className="mt-6 font-medium text-sm text-center text-gray-400">
          Don&#x27;t have an account yet? <a href="#" className="text-[#0b9b70] focus:outline-none focus:underline hover:underline">Sign up</a>.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Login