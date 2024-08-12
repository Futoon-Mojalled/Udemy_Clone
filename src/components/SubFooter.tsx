import React from 'react'
import FooterImg1 from '../assets/FooterImage1.svg';
import FooterImg2 from '../assets/FooterImage2.svg';
import FooterImg3 from '../assets/FooterImage3.svg';
import FooterImg4 from '../assets/FooterImage4.svg';
import FooterImg5 from '../assets/FooterImage5.svg';

function SubFooter() {
  return (
    <div className='bg-[#2D2F31]'>
      <div className='px-[52px] flex flex-row space-x-[25px] py-[25px] items-center'>
        <h2 className='text-[#FFFFFF] font-bold text-[18px]'>Top companies choose <span className='text-[#C0C4FC]'> Udemy Business </span> to build in-demand career skills.</h2>
        <div className='flex flex-row space-x-[15px] items-center size-[43%]'>
          <img src={FooterImg1} alt="Footer Image 1" />
          <img src={FooterImg2} alt="Footer Image 2" className='size-10 ' />
          <img src={FooterImg3} alt="Footer Image 3" className='size-14' />
          <img src={FooterImg4} alt="Footer Image 4" />
          <img src={FooterImg5} alt="Footer Image 5" />
        </div>
      </div>
      <hr className="border-[#3E4143] w-full" />
    </div>
  )
}

export default SubFooter