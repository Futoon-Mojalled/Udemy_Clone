import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Course } from './App';

import HomeBanner2 from '../assets/HomeBanner2.jpg';

import homeImage1 from '../assets/homeImage1.svg';
import homeImage2 from '../assets/homeImage2.svg';
import homeImage3 from '../assets/homeImage3.svg';
import homeImage4 from '../assets/homeImage4.svg';
import homeImage5 from '../assets/homeImage5.svg';
import homeImage6 from '../assets/homeImage6.svg';
import homeImage7 from '../assets/homeImage7.svg';
import homeImage8 from '../assets/homeImage8.svg';

import Category1 from '../assets/Categories/Category1.jpg';
import Category2 from '../assets/Categories/Category2.jpg';
import Category3 from '../assets/Categories/Category3.jpg';
import Category4 from '../assets/Categories/Category4.jpg';
import Category5 from '../assets/Categories/Category5.jpg';
import Category6 from '../assets/Categories/Category6.jpg';
import Category7 from '../assets/Categories/Category7.jpg';
import Category8 from '../assets/Categories/Category8.jpg';

interface HomePageProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

function HomePage({ courses, setCourses }: HomePageProps) {
  const apiKey = 'AIzaSyCULx0EyynZLPikq0eSogYzDlNG4I5SlKo';
  const searchQuery = 'programming+course|web+development+course|data+science+full+course';
  const maxResults = 15;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=${maxResults}&key=${apiKey}`;

  async function fetchCourses() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const formattedCourses: Course[] = data.items.map((course: any, index: number) => ({
        id: index, // Use index as a temporary unique identifier
        courseName: course.snippet.title,
        courseDesc: course.snippet.description,
        courseImg: course.snippet.thumbnails.high.url,
        courseInstructor: course.snippet.channelTitle,
        price: generateRandomPrice()
      }));

      setCourses(formattedCourses);
    } catch (error) {
      console.error('Error fetching courses data:', error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const generateRandomPrice = (): string => {
    const randomPrice = Math.floor(Math.random() * (119 - 29 + 1)) + 29;
    return `${randomPrice}.99`;
  };

  return (
    <div>
      <Helmet>
        <title>Udemy</title>
      </Helmet>

      {/* --------------------- HomeBanner --------------------- */}
      <div
        style={{ backgroundImage: `url(${HomeBanner2})` }}
        className="relative w-full bg-center bg-cover h-[410px]"
      >
        <div className="shadow-lg absolute top-20 left-20 text-[#2D2F31] pt-4 pl-8 pr-5 w-[480px] h-[170px] bg-[#FFFFFF]">
          <h1 className="font-times font-bold text-[40px]">Learning that gets you</h1>
          <p className="font-[530] text-[16px]">
            Skills for your present (and your future). Get started with us.
          </p>
        </div>
      </div>

      {/* --------------------- CompaniesBanner --------------------- */}
      <div className="bg-[#F7F9FA] mt-12 w-full h-[215px] py-12">
        <p className="text-[#6A6F73] text-[19px] font-[480] flex justify-center">
          Trusted by over 16,000 companies and millions of learners around the world
        </p>
        <div className="mt-9 flex flex-row space-x-[15px] items-center justify-between px-24">
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

      {/* --------------------- Courses --------------------- */}
      <div className="mt-10 px-9">
        <div className="px-4">
          <h1 className="text-[39px] font-bold font-times">A broad selection of courses</h1>
          <p className="text-[20px] font-[450]">
            Choose from over 220,000 online video courses with new additions published every
            month
          </p>
        </div>

        <div className="grid grid-cols-1 m-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-3">
          {courses.map((course, index) => ( // Add index here
            <Link to={`/Course/${course.id}`} key={index} state={{ course }}>
              <div className="flex-1 pb-1 mb-2">
                <img
                  src={course.courseImg}
                  alt={course.courseName}
                  className="w-full h-auto border border-[#D1D7DC] mb-[6px]"
                />
                <p className="font-bold text-[16px] line-clamp-2 overflow-hidden">
                  {course.courseName}
                </p>
                <p className="text-[#6A6F73]">{course.courseInstructor}</p>
                <p className="font-bold text-[16px] mt-1">{`$${course.price}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --------------------- Categories --------------------- */}
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
    </div>
  );
}

export default HomePage;
