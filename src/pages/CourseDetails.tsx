import React from 'react';
import { useParams } from 'react-router-dom';
import { Course } from '../App';
import { Link } from 'react-router-dom';
import SubFooter from '../components/SubFooter';

interface CourseDetailsProps {
  courses: Course[];
  addToCart: (course: Course) => void;
}

function CourseDetails({ courses, addToCart }: CourseDetailsProps) {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((course) => course.id.toString() === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <div className='relative -ml-2 mb-28 h-[352px] text-[16px] bg-[#2D2F31]'>
        <div className='w-[800px] pr-3 mt-1 absolute top-[70px] left-[80px] h-[328px]'>
          <h1 className='text-[32px] font-bold text-[#C0C4FC]'>{course.courseName}</h1>
          <p className='mt-4 text-[19px] font-semibold text-[#FFFFFF]'>{course.courseDesc}</p>
          <p className='mt-2 text-[14px] font-medium text-[#FFFFFF]'>
            Created by <span className='text-[#C0C4FC] underline'>{course.courseInstructor}</span>
          </p>
        </div>
        <div className='bg-white shadow-lg mt-1 absolute top-[50px] right-20 h-[455px] w-[360px]'>
          <div className='h-48 m-[1px]'>
            <img src={course.courseImg} alt={course.courseName} />
          </div>
          <p className='mt-[93px] ml-5 text-[19px] font-semibold'>
            ${course.price}
          </p>
          <div className='mt-4 ml-5 mr-5 text-[16px] mb-2 font-[650] py-3 text-center bg-[#A435F0] hover:bg-[#8710D8] text-[#FFFFFF]'>
            <button onClick={() => addToCart(course)}>Add to cart</button>
          </div>

          <div className='ml-5 mr-5 text-[16px] font-[650] py-3 text-center hover:bg-[#E3E7EA] border border-[#2D2F31]'>
            <Link to="/cart"> <button >Buy now</button></Link>
          </div>

        </div>
      </div>

      <div className='h-40'></div>
      
      <SubFooter />
    </>
  );
}



export default CourseDetails;
