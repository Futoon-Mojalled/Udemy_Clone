import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Footer from './components/Footer'
import CourseDetails from './pages/CourseDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export interface Course {
  id: number;
  courseName: string;
  courseDesc: string;
  courseImg: string;
  courseInstructor: string;
}

export default function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage courses={courses} setCourses={setCourses} />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Course/:courseId" element={<CourseDetails courses={courses} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
