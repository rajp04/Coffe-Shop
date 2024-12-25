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
import AdminContact from './components/Admin/Contact'
import AdminBlogs from './components/Admin/Blogs'
import AddBlogs from './components/Admin/Blogs/AddBlogs'
import EditBlogs from './components/Admin/Blogs/EditBlogs'
import AdminHomeBanner from './components/Admin/Home/HomeBanner'
import AddHomeBanner from './components/Admin/Home/HomeBanner/AddBanner'
import EditHomeBanner from './components/Admin/Home/HomeBanner/EditBanner'
import AdminHomeTestimonial from './components/Admin/Home/HomeTestimonial'
import AddHomeTestimonial from './components/Admin/Home/HomeTestimonial/AddTestimonial'
import EditHomeTestimonial from './components/Admin/Home/HomeTestimonial/EditTestimonial'
import AddHomeTeamMember from './components/Admin/Home/HomeTeamMember/AddHomeTeamMember'
import AdminTeamMember from './components/Admin/Home/HomeTeamMember'
import EditHomeTeamMember from './components/Admin/Home/HomeTeamMember/EditHomeTeamMember'

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
            <Route path="contact" element={<AdminContact />} />
            <Route path="blog" element={<AdminBlogs />} />
            <Route path="addblog" element={<AddBlogs />} />
            <Route path="editblog" element={<EditBlogs />} />
            <Route path="home/banner" element={<AdminHomeBanner />} />
            <Route path="home/addbanner" element={<AddHomeBanner />} />
            <Route path="home/editbanner" element={<EditHomeBanner />} />
            <Route path="home/testimonial" element={<AdminHomeTestimonial />} />
            <Route path="home/addtestimonial" element={<AddHomeTestimonial />} />
            <Route path="home/edittestimonial" element={<EditHomeTestimonial />} />
            <Route path="home/team" element={<AdminTeamMember />} />
            <Route path="home/addteam" element={<AddHomeTeamMember />} />
            <Route path="home/editteam" element={<EditHomeTeamMember />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App