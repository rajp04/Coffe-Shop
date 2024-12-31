import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Service from './components/Service';
import Error from './components/Error';
import BlogDetails from './components/BlogDetails';
import Admin from './components/Admin';
import Login from './components/Admin/Login';
import Dashboard from './components/Admin/Dashboard';
import AdminMenu from './components/Admin/Menu';
import AddMenu from './components/Admin/Menu/AddMenu';
import EditMenu from './components/Admin/Menu/EditMenu';
import AdminService from './components/Admin/Services';
import AddService from './components/Admin/Services/AddService';
import EditService from './components/Admin/Services/EditService';
import EditGallery from './components/Admin/Gallery/EditGallery';
import AddGallery from './components/Admin/Gallery/AddGallery';
import AdminGallery from './components/Admin/Gallery';
import AdminBooking from './components/Admin/Booking';
import AdminContact from './components/Admin/Contact';
import AdminBlogs from './components/Admin/Blogs';
import AddBlogs from './components/Admin/Blogs/AddBlogs';
import EditBlogs from './components/Admin/Blogs/EditBlogs';
import AdminHomeBanner from './components/Admin/Home/HomeBanner';
import AddHomeBanner from './components/Admin/Home/HomeBanner/AddBanner';
import EditHomeBanner from './components/Admin/Home/HomeBanner/EditBanner';
import AdminHomeTestimonial from './components/Admin/Home/HomeTestimonial';
import AddHomeTestimonial from './components/Admin/Home/HomeTestimonial/AddTestimonial';
import EditHomeTestimonial from './components/Admin/Home/HomeTestimonial/EditTestimonial';
import AddHomeTeamMember from './components/Admin/Home/HomeTeamMember/AddHomeTeamMember';
import AdminTeamMember from './components/Admin/Home/HomeTeamMember';
import EditHomeTeamMember from './components/Admin/Home/HomeTeamMember/EditHomeTeamMember';
import AdminNewRole from './components/Admin/Role';
import AddRole from './components/Admin/Role/AddRole';
import EditRole from './components/Admin/Role/EditRole';
import axios from 'axios';

const App = () => {
  const [permissions, setPermissions] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const token = sessionStorage.getItem('Admin');
        const response = await axios.get('https://coffe-shop-btr1.onrender.com/api/admin/admin-panel', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response?.data.success === 1) {
          setPermissions(response?.data?.permissions || {});
        } else {
          // console.error('Failed to fetch permissions:', response?.data.message);
          setPermissions({});
        }
      } catch (error) {
        // console.error('Error fetching permissions:', error.message);
        setPermissions({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchPermissions();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="blogs/blogdetails/:id" element={<BlogDetails />} />
        <Route path="admin/login" element={<Login />} />

        {/* Admin Routes */}
        {permissions && (
          <Route path="admin" element={<Admin />}>
            {permissions.dashboard?.includes('view') && <Route path="" element={<Dashboard />} />}
            {/* Menu Permissions */}
            {permissions.menu?.includes('view') && <Route path="menu" element={<AdminMenu />} />}
            {permissions.menu?.includes('add') && <Route path="addmenu" element={<AddMenu />} />}
            {permissions.menu?.includes('edit') && <Route path="editmenu" element={<EditMenu />} />}

            {/* Service Permissions */}
            {permissions.service?.includes('view') && <Route path="service" element={<AdminService />} />}
            {permissions.service?.includes('add') && <Route path="addservice" element={<AddService />} />}
            {permissions.service?.includes('edit') && <Route path="editservice" element={<EditService />} />}

            {/* Role Permissions */}
            {permissions.role?.includes('view') && <Route path="role" element={<AdminNewRole />} />}
            {permissions.role?.includes('add') && <Route path="addrole" element={<AddRole />} />}
            {permissions.role?.includes('edit') && <Route path="editrole" element={<EditRole />} />}

            {/* Gallery Permissions */}
            {permissions.gallery?.includes('view') && <Route path="gallery" element={<AdminGallery />} />}
            {permissions.gallery?.includes('add') && <Route path="addgallery" element={<AddGallery />} />}
            {permissions.gallery?.includes('edit') && <Route path="editgallery" element={<EditGallery />} />}

            {/* Booking Permissions */}
            {permissions.booking?.includes('view') && <Route path="booking" element={<AdminBooking />} />}

            {/* Contact Permissions */}
            {permissions.contact?.includes('view') && <Route path="contact" element={<AdminContact />} />}

            {/* Blogs Permissions */}
            {permissions.blog?.includes('view') && <Route path="blog" element={<AdminBlogs />} />}
            {permissions.blog?.includes('add') && <Route path="addblog" element={<AddBlogs />} />}
            {permissions.blog?.includes('edit') && <Route path="editblog" element={<EditBlogs />} />}

            {/* Home Banner Permissions */}
            {permissions.homebanner?.includes('view') && <Route path="home/banner" element={<AdminHomeBanner />} />}
            {permissions.homebanner?.includes('add') && <Route path="home/addbanner" element={<AddHomeBanner />} />}
            {permissions.homebanner?.includes('edit') && <Route path="home/editbanner" element={<EditHomeBanner />} />}

            {/* Testimonials Permissions */}
            {permissions.hometestimonial?.includes('view') && <Route path="home/testimonial" element={<AdminHomeTestimonial />} />}
            {permissions.hometestimonial?.includes('add') && <Route path="home/addtestimonial" element={<AddHomeTestimonial />} />}
            {permissions.hometestimonial?.includes('edit') && <Route path="home/edittestimonial" element={<EditHomeTestimonial />} />}

            {/* Team Members Permissions */}
            {permissions.hometeammember?.includes('view') && <Route path="home/team" element={<AdminTeamMember />} />}
            {permissions.hometeammember?.includes('add') && <Route path="home/addteam" element={<AddHomeTeamMember />} />}
            {permissions.hometeammember?.includes('edit') && <Route path="home/editteam" element={<EditHomeTeamMember />} />}
          </Route>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;