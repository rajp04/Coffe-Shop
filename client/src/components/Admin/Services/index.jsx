import React, { useEffect, useState } from 'react';
import { Pagination } from "@mui/material";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

function AdminService() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [permissions, setPermissions] = useState();
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://coffe-shop-btr1.onrender.com/api/service');
        if (response.data.success === 1) {
          setData(response.data.result);
          setFilteredData(response.data.result);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [data]);

  const debouncedFilter = debounce((term) => {
    const filtered = term
      ? data.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      )
      : data;
    setFilteredData(filtered);
    setCurrentPage(1);
  }, 300);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedFilter(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://coffe-shop-btr1.onrender.com/api/service/delete/${id}`);
      if (response?.data?.success === 1) {
        console.log(response.data.message);
      } else {
        console.error(response?.message?.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

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
      <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Service</h1>
      <div className='bg-white dark:bg-gray-900 rounded-md'>
        <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
          <div className="grid sm:grid-cols-1 grid-cols-1 gap-4 bg-transparent">
            <div className="bg-transparent space-y-1 ">
              <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1">SEARCH BY NAME</h1>
              <input
                type="text"
                placeholder="name"
                className="w-full py-[10px] px-4 rounded-md text-xl bg-gray-200 text-gray-700 outline-none font-[500]"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-transparent">
            <table className="mt-3 w-full">
              <thead className="text-white bg-[#1C2434]">
                <tr className="bg-transparent">
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Name</th>
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-80">DESCRIPTION</th>
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">IMAGE</th>
                  <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">SUBIMAGE</th>
                  {(permissions?.service?.includes('edit') || permissions?.service?.includes('delete')) && (<th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">ACTION</th>)}
                </tr>
              </thead>
              <tbody className='bg-[#1c243488]'>
                {currentItems.map((item, index) => (
                  <tr className='bg-transparent border-t border-gray-600' key={index}>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.name}</td>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-80'>
                      {item.description.length > 70 ? `${item.description.slice(0, 70)}...` : item.description}
                    </td>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                      <img src={item.image} alt="service" style={{ height: "50px", objectFit: "cover" }} />
                    </td>
                    <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                      <img src={item.subImage} alt="service-sub" style={{ height: "50px", objectFit: "cover" }} />
                    </td>
                    {(permissions?.service?.includes('edit') || permissions?.service?.includes('delete')) && (<td className="bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
                      <div className="bg-transparent flex items-center space-x-1">
                        {permissions?.service?.includes('edit') && (<HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/editservice`, { state: item })} />)}
                        {permissions?.service?.includes('delete') && (<MdDelete className="text-[#f11133] bg-[#ffdfe4] rounded-md cursor-pointer text-[26px] p-1" onClick={() => handleDelete(item._id)} />)}
                      </div>
                    </td>)}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-between bg-transparent mt-5">
              <h1 className="bg-transparent text-gray-700 dark:text-white">
                Showing {currentItems.length} of {filteredData.length} results
              </h1>
              <Pagination
                count={Math.ceil(filteredData.length / itemsPerPage)}
                color="secondary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminService;