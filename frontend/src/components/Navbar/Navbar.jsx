import React, { useState } from 'react';
import { getInitials } from '../../utils/Helper';
import {useNavigate} from 'react-router-dom';
import {FaMagnifyingGlass} from 'react-icons/fa6';
import {IoMdClose} from 'react-icons/io';

export default function Navbar() {

  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery('');
  };

  const onLogout = () => {
    navigate('/login')
  };

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <div>
        {/* <img src="https://image.pngaaa.com/38/3986038-middle.png" alt="logo" /> */}
        <h2 className='text-xl font-medium text-black py-2'>Noty</h2>
        </div>

        <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
          <input type="text"
            placeholder='Search Notes'
            className='w-full text-xs bg-transparent py-[11px] outline-none'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />

          {searchQuery && ( 
            <IoMdClose className="text-slate-400 cursor-pointer hover:text-black" 
            onClick={onClearSearch}
            />  
          )}
          

          <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-black"
           onClick={handleSearch}
           />

        </div>

        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-black font-medium bg-slate-100'>
              {getInitials("Jhon willam")}
            </div>
            <div>
              <p className='text-sm font-medium'>wiliam</p>
              <button className='' onClick={onLogout}>
                  Logout
              </button>
            </div>
        </div>
    </div>
  )
}
