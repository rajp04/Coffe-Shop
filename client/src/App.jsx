import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Service from './components/Service'
import Error from './components/Error'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="menu" element={<Menu />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="blogs/blogdetails" element={<BlogDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App