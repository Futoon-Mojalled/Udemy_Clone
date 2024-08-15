import React from 'react'
import Category1 from '../assets/Categories/Category1.jpg';
import Category2 from '../assets/Categories/Category2.jpg';
import Category3 from '../assets/Categories/Category3.jpg';
import Category4 from '../assets/Categories/Category4.jpg';
import Category5 from '../assets/Categories/Category5.jpg';
import Category6 from '../assets/Categories/Category6.jpg';
import Category7 from '../assets/Categories/Category7.jpg';
import Category8 from '../assets/Categories/Category8.jpg';


function Categories() {
  return (
    <>
    <div className="ml-[52px] mt-16 mb-20">
        <p className="text-[32px] font-[600]">Top categories</p>

        <div className="flex flex-row justify-between mt-5 mr-6">
          <div className="flex items-start flex-1">
            <div className="flex flex-col flex-1 mr-2">
              <div className="flex-1 pb-2 mb-3">
                <img src={Category1} className="w-[300px] h-[300px] mb-[6px]" />
                <p className="font-bold text-[17.5px]">Design</p>
              </div>
              <div className="flex-1 pb-2 mb-3">
                <img src={Category5} className="mb-[6px] w-[300px] h-[300px]" />
                <p className="font-bold text-[17.5px]">Personal Development</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 mr-2">
              <div className="flex-1 pb-2 mb-3">
                <img src={Category2} className="w-[300px] h-[300px] mb-[6px]" />
                <p className="font-bold text-[17.5px]">Development</p>
              </div>
              <div className="flex-1 pb-2 mb-3">
                <img src={Category6} className="mb-[6px] w-[300px] h-[300px]" />
                <p className="font-bold text-[17.5px]">Business</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 mr-2">
              <div className="flex-1 pb-2 mb-3">
                <img src={Category3} className="w-[300px] h-[300px] mb-[6px]" />
                <p className="font-bold text-[17.5px]">IT and Software</p>
              </div>
              <div className="flex-1 pb-2 mb-3">
                <img src={Category7} className="mb-[6px] w-[300px] h-[300px]" />
                <p className="font-bold text-[17.5px]">Music</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 mr-2">
              <div className="flex-1 pb-2 mb-3">
                <img src={Category4} className="w-[300px] h-[300px] mb-[6px]" />
                <p className="font-bold text-[17.5px]">Design</p>
              </div>
              <div className="flex-1 pb-2 mb-3">
                <img src={Category8} className="mb-[6px] w-[300px] h-[300px]" />
                <p className="font-bold text-[17.5px]">Personal Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories