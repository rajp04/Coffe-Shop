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
import Admin from './components/Admin'
import Login from './components/Admin/Login'
import Dashboard from './components/Admin/Dashboard'
import AdminMenu from './components/Admin/Menu'
import AddMenu from './components/Admin/Menu/AddMenu'
import EditMenu from './components/Admin/Menu/EditMenu'
import AdminService from './components/Admin/Services'
import AddService from './components/Admin/Services/AddService'
import EditService from './components/Admin/Services/EditService'
import EditGallery from './components/Admin/Gallery/EditGallery'
import AddGallery from './components/Admin/Gallery/AddGallery'
import AdminGallery from './components/Admin/Gallery'
import AdminBooking from './components/Admin/Booking'

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
          <Route path="blogs/blogdetails/:id" element={<BlogDetails />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/" element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="addmenu" element={<AddMenu />} />
            <Route path="editmenu" element={<EditMenu />} />
            <Route path="service" element={<AdminService />} />
            <Route path="addservice" element={<AddService />} />
            <Route path="editservice" element={<EditService />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="addgallery" element={<AddGallery />} />
            <Route path="editgallery" element={<EditGallery />} />
            <Route path="booking" element={<AdminBooking />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App