import React from 'react'
import LanguageIcon from '../assets/LanguageIconW.png';
import LogoW from '../assets/UdemyLogoW.svg';

function Footer() {
  return (
    <div className='bg-[#2D2F31] py-[30px] px-[52px]'>

      <div className='flex flex-row justify-between'>

        <div className='flex items-start flex-1'>
          <div className='flex flex-col flex-1'>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Udemy Business</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Teach on Udemy</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Get the app</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>About us</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Contact us</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Careers</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Blog</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Help and Support</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Affiliate</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Investors</div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Terms</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Privacy policy</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Cookie settings</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Sitemap</div>
            <div className='flex-1 text-[#FFFFFF] hover:underline pb-1'>Accessibility statement</div>
          </div>
        </div>

        <button className='ml-7 border border-[#FFFFFF] hover:bg-[#2B3035] flex flex-row h-10 items-center p-3'><img src={LanguageIcon} alt="Language Icon" className='flex w-4 mr-2' /> <p className='flex flex-1 text-[#fff] font-medium'>English</p></button>

      </div>

      <div className='flex flex-row items-center justify-between mb-2 mt-11'>
        <div><img src={LogoW} alt="Udemy Logo" className='h-[34px] w-[91px]' /></div>
        <div className='text-[#FFFFFF] text-[12px]'> © 2024 Udemy, Inc. </div>
      </div>

    </div>
  )
}

export default Footer