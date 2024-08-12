import React from 'react'
import './index.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Footer from './components/Footer'
import Course1 from './pages/Course1';
import Course2 from './pages/Course2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Course/1" element={<Course1 />} />
        <Route path="/Course/2" element={<Course2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
