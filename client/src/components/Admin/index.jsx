import React, { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const MyContext = createContext();

function Admin() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [themeMode, setThemeMode] = useState(true);

  const navigate = useNavigate()
  const admin = sessionStorage.getItem("Admin")

  useEffect(() => {
    if (admin == null) {
      navigate("/admin/login")
    }
  })

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light')
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark')
    }
  }, [themeMode])

  const value = { sidebarOpen, setSidebarOpen, themeMode, setThemeMode };

  return (
    <MyContext.Provider value={value}>
      <div className={`flex relative ${themeMode === 'dark' ? 'dark' : 'light'}`}>
        <div className={`h-screen fixed col-span-2 z-10 bg-[#1C2434] xxss:w-[300px] w-full main_absolute ${sidebarOpen === true ? '' : 'main_absolut_minus'}`}>
          <Sidebar />
        </div>
        <div className='w-full lg:ps-[300px] '>
          <Header />
          <Outlet />
        </div>
      </div >
    </MyContext.Provider>

  )
}

export default Admin
export { MyContext };