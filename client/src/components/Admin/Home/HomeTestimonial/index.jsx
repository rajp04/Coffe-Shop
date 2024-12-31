import React, { useEffect, useState } from 'react';
import { Pagination } from "@mui/material";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function AdminHomeTestimonial() {
  const [data, setData] = useState([]);
  const [permissions, setPermissions] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    const fetchhometestimonial = async () => {
      try {
        const response = await axios.get('https://coffe-shop-btr1.onrender.com/api/testimonial');

        if (response.data.success === 1) {
          setData(response.data.result);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchhometestimonial();
  }, [data]);

  const handleDelete = async (id) => {

    try {
      const response = await axios.delete(`https://coffe-shop-btr1.onrender.com/api/testimonial/delete/${id}`);
      console.log(response);
      if (response?.data?.success === 1) {
        console.log(response.data.message);
      } else {
        console.log(response?.message?.message);
      }

    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const token = sessionStorage.getItem('Admin');
        const response = await axios.get('https://coffe-shop-btr1.onrender.com/api/admin/admin-panel', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success === 1) {
          setPermissions(response.data.permissions || {});
        } else {
          console.error('Failed to fetch permissions:', response.data.message);
          setPermissions({});
        }
      } catch (error) {
        console.error('Error fetching permissions:', error.message);
        setPermissions({});
      }
    };

    fetchPermissions();
  }, []);

  return (
    <div className='pt-[90px] bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
      <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Testimonial</h1>
      <div className='bg-white dark:bg-gray-900 rounded-md'>
        <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
          <div className="overflow-x-auto bg-transparent">
            <table className="mt-3 w-full">
              <thead className=" text-white bg-[#1C2434]">
                <tr className="bg-transparent">
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Name</th>
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-80">DESCRIPTION</th>
                  {(permissions?.hometestimonial?.includes('edit') || permissions?.hometestimonial?.includes('delete')) && (<th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">ACTION</th>)}
                </tr>
              </thead>
              <tbody className='bg-[#1c243488]'>
                {data.map((item, index) => (
                  <tr className='bg-transparent border-t border-gray-600' key={index}>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.name}</td>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-80'>
                      {item.description.length > 70 ? `${item.description.slice(0, 70)}...` : item.description}
                    </td>
                    {(permissions?.hometestimonial?.includes('edit') || permissions?.hometestimonial?.includes('delete')) && (<td className="bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
                      <div className="bg-transparent flex items-center space-x-1">
                        {permissions?.hometestimonial?.includes('edit') && (<HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/home/edittestimonial`, { state: item })} />)}
                        {permissions?.hometestimonial?.includes('delete') && (<MdDelete className="text-[#f11133] bg-[#ffdfe4] rounded-md cursor-pointer text-[26px] p-1" onClick={() => handleDelete(item._id)} />)}
                      </div>
                    </td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomeTestimonial;