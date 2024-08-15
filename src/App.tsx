import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseDetails from './pages/CourseDetails';
import CartPage from './pages/CartPage';

export interface Course {
  id: number;
  courseName: string;
  courseDesc: string;
  courseImg: string;
  courseInstructor: string;
  price: string;
}

interface CartItem {
  id: number;
  title: string;
  instructor: string;
  price: string;
  image: string;
}

export default function App() {

  const [courses, setCourses] = useState<Course[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (course: Course) => {
    const cartItem: CartItem = {
      id: course.id,
      title: course.courseName,
      instructor: course.courseInstructor,
      price: course.price,
      image: course.courseImg,
    };
    setCartItems([...cartItems, cartItem]);
    alert(`Course added to cart successfully!`)
  };
  
  //filter method creates a new array containing only the items that pass a specific test.
  const removeFromCart = (courseId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== courseId));
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage courses={courses} setCourses={setCourses} />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course/:courseId" element={<CourseDetails courses={courses} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}