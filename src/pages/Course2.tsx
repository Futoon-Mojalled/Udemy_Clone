import React from 'react'
import SubFooter from '../components/SubFooter';
import Course2Preview from '../assets/Course2-Preview.jpg';

function Course2() {
    return (
        <div>
            <div className='relative h-[352px] text-[16px] bg-[#2D2F31]'>
                <div className='w-[755px] absolute top-[70px] left-[80px] h-[328px]'>
                    <h1 className='text-[32px] font-bold text-[#C0C4FC]'>The Complete 2024 Web Development Bootcamp</h1>
                    <p className='mt-4 text-[19px] font-semibold text-[#FFFFFF]'>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <p className='mt-2 text-[14px] font-medium text-[#FFFFFF]'>Created by <span className=' text-[#C0C4FC] underline'>Dr. Angela Yu, Developer and Lead Instructor</span></p>
                </div>
                <div className='bg-white shadow-lg absolute top-[50px] right-24 h-[384px] w-[360px]'>
                    <div className='h-48'> <img src={Course2Preview}/></div>
                    <p className='mt-6 ml-5 text-[19px] font-semibold'>$94.99</p>
                    <div className='mt-4 ml-5 mr-5 text-[16px] mb-2 font-[650] py-3 text-center bg-[#A435F0] hover:bg-[#8710D8] text-[#FFFFFF]'><button id='signup-btn'>Add to cart</button></div>
                    <div className='ml-5 mr-5 text-[16px] font-[650] py-3 text-center hover:bg-[#E3E7EA] border border-[#2D2F31]'><button id='signup-btn'>Buy now</button></div>
                </div>
            </div>

            <div className='h-40'></div>

            <SubFooter />
        </div>
    )
}

export default Course2;