import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/UdemyLogo.svg';
import SearchIcon from '../assets/SearchIcon.png';
import LanguageIcon from '../assets/LanguageIcon.png';
import { MdOutlineShoppingCart } from "react-icons/md";

function Header() {
    return (
        <div className="flex font-[500] flex-row justify-between h-[72px] px-6 items-center shadow-bottom text-[13.5px] leading-[19.6px] z-[99999] relative">

            <Link to="/home"><img src={Logo} alt="Udemy Logo" className='h-[34px] w-[91px]' /></Link>

            <button className='hover:text-[#5022CF]'>Categories</button>

            <div className='search-container'>
                <img src={SearchIcon} alt="Search Icon" className='absolute size-[17px] top-[27.5px] left-[245px]' />
                <input type="text" className='p-3 w-[560px] pl-11 rounded-3xl placeholder:text-[14px] placeholder-[#6A6F73] bg-[#F7F9FA] border border-[#101011]' placeholder='Search for anything' />
            </div>

            <button className='hover:text-[#5022CF]'>Udemy Business</button>

            <button className='hover:text-[#5022CF]'>Teach on Udemy</button>

            <Link to="/cart">
                <button className='pt-1'>
                    <MdOutlineShoppingCart size={25} className='fill-[#2D2F31] hover:fill-[#5022C3]' />
                </button>
            </Link>

            <Link to="/login"><button className='hover:bg-[#E3E7EA] border border-[#2D2F31] font-bold px-[16px] py-[9.3px]'>Log in</button></Link>

            <Link to="/signup"><button className='hover:bg-[#3E4143] border border-[#2D2F31] bg-[#2D2F31] text-[#FFFFFF] font-bold px-[15px] py-[9.3px] -ml-[12px] -mr-[12px]'>Sign up</button></Link>

            <button className='border border-[#2D2F31] p-[9.3px] hover:bg-[#E3E7EA]'><img src={LanguageIcon} alt="Language Icon" className='size-4' /></button>

        </div>
    );
}

export default Header;
