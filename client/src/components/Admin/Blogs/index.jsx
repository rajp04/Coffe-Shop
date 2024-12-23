import React, { useEffect, useState } from 'react';
import { Pagination } from "@mui/material";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function AdminBlogs() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 12;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('http://localhost:1101/api/blog');
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
        fetchMenu();
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let filtered = data;

            if (selectedCategory) {
                filtered = filtered.filter((item) => item.category === selectedCategory);
            }

            if (searchTerm) {
                filtered = filtered.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            setFilteredData(filtered);
            setCurrentPage(1);
        };

        applyFilters();
    }, [selectedCategory, searchTerm, data]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:1101/api/blog/delete/${id}`);
            if (response?.data?.success === 1) {
                setData((prevData) => prevData.filter((item) => item._id !== id));
            } else {
                console.error(response?.data?.message || "Delete failed");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='pt-[90px] bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
            <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Blogs</h1>
            <div className='bg-white dark:bg-gray-900 rounded-md'>
                <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 bg-transparent">
                        <div className="bg-transparent space-y-1">
                            <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1">CATEGORY BY</h1>
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="w-full p-2 rounded-md text-2xl bg-gray-200 text-gray-700 outline-none font-[500]"
                            >
                                <option value="">All</option>
                                {data && [...new Set(data.map((item) => item.category))].map((uniqueCategory) => (
                                    <option value={uniqueCategory} key={uniqueCategory}>
                                        {uniqueCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-transparent space-y-1">
                            <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1">SEARCH BY</h1>
                            <input
                                type="text"
                                placeholder="title"
                                className="w-full py-[10px] px-4 rounded-md text-xl bg-gray-200 text-gray-700 outline-none font-[500]"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-transparent">
                        <table className="mt-3 w-full">
                            <thead className="text-white bg-[#1C2434]">
                                <tr>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Title</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Description</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Category</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Image</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-[#1c243488]'>
                                {currentItems.map((item, index) => (
                                    <tr className='border-t border-gray-600' key={index}>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.title.length > 60 ? `${item.title.slice(0, 60)}...` : item.title}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.category}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <img src={item.image} alt="service" style={{ height: "50px", objectFit: "cover" }} />
                                        </td>
                                        <td className="px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
                                            <div className="flex items-center space-x-1">
                                                <HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/editblog`, { state: item })} />
                                                <MdDelete className="text-[#f11133] bg-[#ffdfe4] rounded-md cursor-pointer text-[26px] p-1" onClick={() => handleDelete(item._id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex items-center justify-between mt-5">
                            <h1 className="text-gray-700 dark:text-white">
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

export default AdminBlogs;