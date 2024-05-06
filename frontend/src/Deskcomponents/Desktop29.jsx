import React from 'react';
import { FiUser } from 'react-icons/fi'; // Import the user icon from react-icons library

const Continue = () => {
  return (
    <div className='flex justify-center items-center overflow-auto'>
      <div className='bg-white mt-28 rounded-lg md:w-[450px] md:h-[450px]'>
        <div className='mt-4 text-4xl'>Sign in or Sign up</div>
        <div className='m-6'>Sign in or sign up using your mobile number or email</div>
        <div className="relative m-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiUser className="h-5 w-5 text-gray-400" />
          </span>
          <input type="text" placeholder="Enter email or phone number" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className='bg-[#3B82F6] m-6 py-2 rounded-lg'>
          <button>Continue</button>
        </div>
        <div>
          By continuing, you agree to YaT’s Terms & Conditions and Privacy Policy.
        </div>
        <div className="md flex items-center m-6">
          <div className="flex-grow border-b border-gray-300"></div>
          <div className="px-3 text-gray-600">Or continue with</div>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>
        <div className="flex justify-center m-6 md:flex md:justify-center md:m-[40px]">
          <div className="w-[25px] md:w-[40px]">
            <img src="https://th.bing.com/th/id/OIP.hGaetDAQWapgIJbIOhPhXwAAAA?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="px-3 w-[50px] md:w-[65px]">
            <img src="https://www.pngmart.com/files/10/Apple-Logo-PNG-File.png" alt="" />
          </div>
          <div className="w-[25px] md:w-[40px]">
            <img src="https://th.bing.com/th/id/OIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continue;
