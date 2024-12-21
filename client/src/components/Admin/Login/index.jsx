import Pattern from '../../../assets/admin/pattern.webp'
import Logo from '../../../assets/cafelogo.svg'
import { IoMail } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [isVisiable, setIsVisiable] = useState(true);
  const navigate = useNavigate();

  const handleVisiable = () => {
    setIsVisiable(!isVisiable);
  }

//   const context = useContext(MyContext);

//   useEffect(() => {
//     context.setIsHeader(true);
//   })

  return (
    <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden relative">
      <div className="pointer-events-none">
        <img src={Pattern} alt="background img" className="h-screen w-screen opacity-20 absolute top-0 left-0" />
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen w-screen z-10">
        <div className='bg-transparent flex items-center justify-center flex-col'>
          <img src={Logo} alt="" className='h-24 w-36' />
          <h1 className='bg-transparent text-2xl font-[600] text-gray-800'>Login</h1>
        </div>
        <div className='bg-[#ecebeb] rounded-md border border-[#e4e4e4] p-5 mt-4 z-50 space-y-5'>
          <div className='bg-white flex items-center hover:text-blue-500 transition-all justify-center rounded-md px-3 py-1 w-full text-gray-700 '>
            <IoMail className='bg-transparent text-2xl' />
            <input type="email" name=""  placeholder='Enter your email' className='py-1 w-full px-3 bg-transparent outline-none hover:text-gray-700' />
          </div>
          <div className='bg-white flex items-center hover:text-blue-500 transition-all justify-center rounded-md px-3 py-1 w-full text-gray-700 '>
            <IoMdLock className='bg-transparent text-2xl' />
            <input type={`${isVisiable === true ? "password" : ""}`} name=""  placeholder='Enter your password' className='py-1 w-full px-3 bg-transparent outline-none hover:text-gray-700' />
            <div className='bg-transparent ' onClick={handleVisiable}>
              {
                isVisiable === true ?
                  <FaEye className='bg-transparent text-xl hover:text-gray-700 cursor-pointer' />
                  :
                  <FaEyeSlash className='bg-transparent text-xl hover:text-gray-700 cursor-pointer' />
              }
            </div>
          </div>
          <button className='text-white flex items-center bg-blue-500 justify-center rounded-md px-3 py-2 w-full cursor-pointer font-[500] text-xl'>SIGN IN</button>
          <h1 className='text-center bg-transparent text-gray-700 text-sm hover:text-blue-500 cursor-pointer' onClick={() => navigate('/forgetpassword')}>Forget Password</h1>
        </div>
      </div>
    </div>
  )
}

export default Login