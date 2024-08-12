import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HomeBanner2 from '../assets/HomeBanner2.jpg';
import homeImage1 from '../assets/homeImage1.svg';
import homeImage2 from '../assets/homeImage2.svg';
import homeImage3 from '../assets/homeImage3.svg';
import homeImage4 from '../assets/homeImage4.svg';
import homeImage5 from '../assets/homeImage5.svg';
import homeImage6 from '../assets/homeImage6.svg';
import homeImage7 from '../assets/homeImage7.svg';
import homeImage8 from '../assets/homeImage8.svg';

import Course1 from '../assets/Courses/Course1.jpg';
import Course2 from '../assets/Courses/Course2.jpg';
import Course3 from '../assets/Courses/Course3.jpg';
import Course4 from '../assets/Courses/Course4.jpg';
import Course5 from '../assets/Courses/Course5.jpg';
import Course6 from '../assets/Courses/Course6.jpg';
import Course7 from '../assets/Courses/Course7.jpg';
import Course8 from '../assets/Courses/Course8.jpg';
import Course9 from '../assets/Courses/Course9.jpg';
import Course10 from '../assets/Courses/Course10.jpg';
import Course11 from '../assets/Courses/Course11.jpg';
import Course12 from '../assets/Courses/Course12.jpg';
import Course13 from '../assets/Courses/Course13.jpg';
import Course14 from '../assets/Courses/Course14.jpg';
import Course15 from '../assets/Courses/Course15.jpg';

import Category1 from '../assets/Categories/Category1.jpg';
import Category2 from '../assets/Categories/Category2.jpg';
import Category3 from '../assets/Categories/Category3.jpg';
import Category4 from '../assets/Categories/Category4.jpg';
import Category5 from '../assets/Categories/Category5.jpg';
import Category6 from '../assets/Categories/Category6.jpg';
import Category7 from '../assets/Categories/Category7.jpg';
import Category8 from '../assets/Categories/Category8.jpg';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Udemy</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${HomeBanner2})` }}
        className="relative w-full bg-center bg-cover h-[410px]">
        <div className='shadow-lg absolute top-20 left-20 text-[#2D2F31] pt-4 pl-8 pr-5 w-[480px] h-[170px] bg-[#FFFFFF]'>
          <h1 className='font-times font-bold text-[40px]'>Learning that gets you</h1>
          <p className='font-[530] text-[16px]'>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>

      <div className='bg-[#F7F9FA] mt-12 w-full h-[215px] py-12'>
        <p className='text-[#6A6F73] text-[19px] font-[480] flex justify-center'>Trusted by over 16,000 companies and millions of learners around the world</p>
        <div className='mt-9 flex flex-row space-x-[15px] items-center justify-between px-24'>
          <img src={homeImage1} alt="home Image 1" />
          <img src={homeImage2} alt="home Image 2" />
          <img src={homeImage3} alt="home Image 3" />
          <img src={homeImage4} alt="home Image 4" />
          <img src={homeImage5} alt="home Image 5" />
          <img src={homeImage6} alt="home Image 6" />
          <img src={homeImage7} alt="home Image 7" />
          <img src={homeImage8} alt="home Image 8" />
        </div>
      </div>

      <div className='mt-10 px-9'>
        <div className='px-4'>
          <h1 className='text-[39px] font-bold font-times'>A broad selection of courses</h1>
          <p className='text-[20px] font-[450]'>Choose from over 220,000 online video courses with new additions published every month</p>
        </div>

        {/* --------------------- Courses -------------------------- */}
        <div className='flex flex-row justify-between m-4'>
          <div className='flex items-start flex-1'>

            <div className='flex flex-col flex-1 mr-2'>
              <Link to="/Course/1" >
                <div className='flex-1 pb-1 mb-3'>
                  <img src={Course1} className='border border-[#D1D7DC] mb-[6px]' />
                  <p className='font-bold text-[16px]'>100 Days of Code: The Complete Python Pro...</p>
                  <p className='text-[#6A6F73]'>Dr. Angela Yu</p>
                  <p className='font-bold text-[16px] mt-1'>$109.99</p>
                </div>
              </Link>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course6} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>React - The Complete Guide 2024 (incl. Next.js, Redux)</p>
                <p className='text-[#6A6F73]'>Maximilian Schwarzmüller</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
              <div className='flex-1 pb-1'>
                <img src={Course11} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>The Web Developer Bootcamp 2024</p>
                <p className='text-[#6A6F73]'>Colt Steele</p>
                <p className='font-bold text-[16px] mt-1'>$94.99</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <Link to="/Course/2" >
                <div className='flex-1 pb-1 mb-3'>
                  <img src={Course2} className='border border-[#D1D7DC] mb-[6px]' />
                  <p className='font-bold text-[16px]'>The Complete 2024 Web Development Bootcamp</p>
                  <p className='text-[#6A6F73]'>Dr. Angela Yu</p>
                  <p className='font-bold text-[16px] mt-1'>$94.99</p>
                </div>
              </Link>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course7} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Machine Learning A-Z: AI, Python & R + ChatGPT...</p>
                <p className='text-[#6A6F73]'>Kirill Eremenko, Hadelin de...</p>
                <p className='font-bold text-[16px] mt-1'>$89.99</p>
              </div>
              <div className='flex-1 pb-1'>
                <img src={Course12} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Node.js, Express, MongoDB & More: The Complete...</p>
                <p className='text-[#6A6F73]'>Jonas Schmedtmann</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course3} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>The Complete Python Bootcamp From Zero to...</p>
                <p className='text-[#6A6F73]'>Jose Portilla, Pierian Training</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course8} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Microsoft Power BI Desktop for Business Intelligence</p>
                <p className='text-[#6A6F73]'>Maven Analytics, Chris Dutton...</p>
                <p className='font-bold text-[16px] mt-1'>$139.99</p>
              </div>
              <div className='flex-1 pb-1'>
                <img src={Course13} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>The Data Science Course: Complete Data Science...</p>
                <p className='text-[#6A6F73]'>365 Careers</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course4} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>[NEW] Ultimate AWS Certified Cloud Practition...</p>
                <p className='text-[#6A6F73]'>Stephane Maarek</p>
                <p className='font-bold text-[16px] mt-1'>$119.99</p>
              </div>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course9} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>The Complete JavaScript Course 2024: From Zero to...</p>
                <p className='text-[#6A6F73]'>Jonas Schmedtmann</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
              <div className='flex-1 pb-1'>
                <img src={Course14} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Python and Django Full Stack Web Developer...</p>
                <p className='text-[#6A6F73]'>Jose Portilla, Pierian Training</p>
                <p className='font-bold text-[16px] mt-1'>$74.99</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 -mr-2'>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course5} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Ultimate AWS Certified Solutions Architect...</p>
                <p className='text-[#6A6F73]'>Stephane Maarek</p>
                <p className='font-bold text-[16px] mt-1'>$119.99</p>
              </div>
              <div className='flex-1 pb-1 mb-3'>
                <img src={Course10} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>The Ultimate React Course 2024: React, Next.js, Red...</p>
                <p className='text-[#6A6F73]'>Jonas Schmedtmann</p>
                <p className='font-bold text-[16px] mt-1'>$74.99</p>
              </div>
              <div className='flex-1 pb-1'>
                <img src={Course15} className='border border-[#D1D7DC] mb-[6px]' />
                <p className='font-bold text-[16px]'>Figma UI UX Design Essentials</p>
                <p className='text-[#6A6F73]'>Daniel Walter Scott</p>
                <p className='font-bold text-[16px] mt-1'>$109.99</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='ml-[52px] mt-16 mb-14'>
        <p className='text-[32px] font-[600]'>Top categories</p>

        <div className='flex flex-row justify-between mt-5 mr-6'>
          <div className='flex items-start flex-1'>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category1} className='w-[300px] h-[300px] mb-[6px]' />
                <p className='font-bold text-[17.5px]'>Design</p>
              </div>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category5} className='mb-[6px] w-[300px] h-[300px]' />
                <p className='font-bold text-[17.5px]'>Personal Development</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category2} className='w-[300px] h-[300px] mb-[6px]' />
                <p className='font-bold text-[17.5px]'>Development</p>
              </div>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category6} className='mb-[6px] w-[300px] h-[300px]' />
                <p className='font-bold text-[17.5px]'>Business</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category3} className='w-[300px] h-[300px] mb-[6px]' />
                <p className='font-bold text-[17.5px]'>IT and Software</p>
              </div>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category7} className='mb-[6px] w-[300px] h-[300px]' />
                <p className='font-bold text-[17.5px]'>Music</p>
              </div>
            </div>

            <div className='flex flex-col flex-1 mr-2'>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category4} className='w-[300px] h-[300px] mb-[6px]' />
                <p className='font-bold text-[17.5px]'>Design</p>
              </div>
              <div className='flex-1 pb-2 mb-3'>
                <img src={Category8} className='mb-[6px] w-[300px] h-[300px]' />
                <p className='font-bold text-[17.5px]'>Personal Development</p>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage