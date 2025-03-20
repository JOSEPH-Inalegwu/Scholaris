import React, { useState } from 'react';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="relative">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-400 text-end mx-3">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:border-[#066649] focus-within:ring-1 focus-within:ring-[#066649]"> 
                <img src="src/assets/lock.svg" alt="Lock icon" className="w-5 h-5 mx-2" />
                <input
                    type={showPassword ? 'text' : 'password'} 
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="block capitalize w-full text-sm px-4 py-3 text-gray-700 placeholder-gray-400 bg-white border-0 focus:outline-none"
                />
                <img 
                    src={showPassword ? "src/assets/eye-closed.svg" : "src/assets/eye-open.svg"}
                    alt="Toggle password visibility"
                    className="cursor-pointer w-5 h-5 mx-2"
                    onClick={togglePasswordVisibility} 
                />
            </div>
        </div>
    );
};

export default PasswordInput;