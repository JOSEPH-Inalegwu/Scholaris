import React from 'react'

const Login = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/4">
                <div className="relative flex items-center h-full px-20 border overflow-hidden">
                    {/* Blurred background image */}
                    <div className="absolute inset-0 bg-[url('src/assets/Image/2-4.jpg')] bg-cover bg-center filter blur-sm" />
                    
                    {/* Green overlay */}
                    <div className="absolute inset-0 bg-[#027451] opacity-50" />
                    
                    <div className='space-y-14 relative z-10'> 
                        <div className="max-w-2xl px-8 py-10 bg-white rounded-lg shadow-md  dark:bg-[#066649]">
                            <div className="mt-2 space-y-3">
                                <h4 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                                Welcome to the Scholaris Portal
                                </h4>
                                <p className='text-gray-500 dark:text-gray-300 text-sm'
                                >Empowering students at <b>Nasarawa State University</b> to excel in their studies. 
                                Access a comprehensive collection of past questions to enhance your learning experience.</p>
                            </div>
                        </div>

                        <div className="max-w-2xl px-8 py-6 bg-white rounded-lg shadow-md dark:bg-[#20775E]">
                            <div className="mt-2">
                                <img src="src/assets/quote-open-editor-svgrepo-com.svg" alt="" 
                                className='w-5 h-5 mx-auto text-white'
                                />
                                <h2 className="font-semibold italic text-center text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200" tabindex="0" role="link">Practice, Progress, Succeed.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center md:text-left">
                        <p className="mt-3 text-xl md:text-3xl font-semibold text-gray-700">Welcome Back!</p>
                    </div>

                    <div className="mt-8 ">
                        <form>
                            <div className="relative">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-500">userID</label>
                                <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-[#066649] focus-within:ring-1 focus-within:ring-[#066649]"> 
                                    <img src="src/assets/user.svg" alt="Quote icon" className="w-6 h-6 mx-2" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="userID"
                                        className="block capitalize w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border-0 focus:outline-none"
                                    />
                                </div>
                            </div>
                            
                            {/* Forgot Password */}
                            <div className="mt-6">
                                <div className="relative">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-500">Password</label>
                                    <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-[#066649] focus-within:ring-1 focus-within:ring-[#066649]"> 
                                        <img src="src/assets/lock.svg" alt="Quote icon" className="w-6 h-6 mx-2" />
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="block capitalize w-full px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border-0 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sign in */}
                            <div className="mt-6">
                                <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login