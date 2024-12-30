import React, { useContext, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { FaAngleDown } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { MdMenuOpen, MdSunny } from "react-icons/md";
import { MyContext } from '..';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const { sidebarOpen, setSidebarOpen } = useContext(MyContext);
  const { themeMode, setThemeMode } = useContext(MyContext);

  const navigate = useNavigate()

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: 64,
    right: 0,
    left: 0,
    zIndex: 1,
    shadows: 3,
    p: 1,
    bgcolor: 'background.paper',
  };


  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 58,
    height: 30,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 28,
      height: 28,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));

  const theme = createTheme({
    palette: {
      mode: themeMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const token = sessionStorage.getItem('Admin');
        const response = await axios.get('http://localhost:1101/api/admin/admin-panel', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success === 1) {
          setData(response.data);
        } else {
          console.error('Failed to fetch permissions:', response.data.message);
          setData({});
        }
      } catch (error) {
        console.error('Error fetching permissions:', error.message);
      }
    };

    fetchPermissions();
  }, []);

  return (
    <div className='fixed h-[80px] header_width  bg-white dark:bg-[#1C2434] xxs:px-8 px-3 flex items-center justify-between text-[18px] text-gray-500'>
      <div className={`${sidebarOpen === true ? 'hidden' : 'flex'}`}>
        <MdMenuOpen className='text-4xl font-bold cursor-pointer text-gray-800 ' onClick={() => setSidebarOpen(true)} />
      </div>
      <div className='sm:flex hidden items-centerjustify-center space-x-4 dark:text-gray-200'>
        <FiSearch className='text-xl' />
        <input type="text" placeholder='Type to search...' className='outline-none bg-transparent ' />
      </div>
      <div className='flex items-center xxs:space-x-5 space-x-3'>
        <ThemeProvider theme={theme}>
          <MaterialUISwitch onClick={() => setThemeMode(!themeMode)} />
        </ThemeProvider>
        <div className='bg-[#eff4fb] dark:bg-[#313d4a] text-[#C8C8C8] hover:text-blue-500 ease-in-out duration-500 rounded-full text-[26px] p-[6px] cursor-pointer'>
          <IoMdNotificationsOutline />
        </div>
        <div className='bg-[#eff4fb] dark:bg-[#313d4a] text-[#C8C8C8] hover:text-blue-500 ease-in-out duration-500 rounded-full text-[26px] p-[6px] cursor-pointer'>
          <AiOutlineMessage />
        </div>
        <div>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
              <button type="button" onClick={handleClick}>
                <div className='flex items-center lg:space-x-3 space-x-0'>
                  <div className='lg:flex hidden flex-col '>
                    <h1 className='text-[#1c2434] dark:text-white'>{data?.role}</h1>
                  </div>
                  <div>
                    <img src="https://res.cloudinary.com/dtdlad1ud/image/upload/v1703938887/y18sqhaus4snghlhcscm.jpg" alt="Avatr" className='rounded-full h-12 w-12' />
                  </div>
                  <div className='lg:flex hidden'>
                    <FaAngleDown />
                  </div>
                </div>
              </button>
              {open ? (
                <Box sx={styles}>
                  <div className='bg-white '>
                    <div className='flex items-center space-x-5 cursor-pointer hover:text-blue-500 duration-300'>
                      <FaRegUser />
                      <h1>My Profile</h1>
                    </div>
                    <div className='flex items-center space-x-5 cursor-pointer hover:text-blue-500 duration-300'>
                      <BiLogOut />
                      <h1 onClick={() => { sessionStorage.removeItem('Admin'); navigate('/admin/login') }}>Log Out</h1>
                    </div>
                  </div>
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  )
}

export default Header