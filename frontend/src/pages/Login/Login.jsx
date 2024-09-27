import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Link} from "react-router-dom"

export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [isShowPassword, setIsShowPassword] = useState(false) ;
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword) ;
    };

  return (
    <>
      <Navbar/>
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
            <form onSubmit={() => {}}>
                <h4 className='text-2xl mb-7'>Login</h4>

                <input type="email" className='w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>

                <div className='w-full text-sm bg-transparent border-[1.5px] px-5 rounded mb-4'>
                    <input type={isShowPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)}
                     className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'/>

                </div>

                <button type='submit' className='w-full text-sm bg-blue-600 text-white p-2 rounded my-1 hover:bg-blue-700 '>
                    Login
                </button>

                <p className='text-sm text-center mt-4'>
                    Not registred yet?{" "}
                    <Link to="/singup" className='font-medium text-blue-600'>
                        Create an account
                    </Link>
                </p>

            </form>
        </div>
      </div>

    </>
  )
}
