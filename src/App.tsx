import React from 'react'
import './index.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping)

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
