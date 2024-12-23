import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiPencil } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function AdminHomeBanner() {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('http://localhost:1101/api/banner');
                if (response.data.success === 1) {
                    setData(response.data.result);
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchMenu();
    }, []);

    return (
        <div className='pt-[90px] bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
            <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Home Banner</h1>
            <div className='bg-white dark:bg-gray-900 rounded-md'>
                <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
                    <div className="overflow-x-auto bg-transparent">
                        <table className="mt-3 w-full">
                            <thead className="text-white bg-[#1C2434]">
                                <tr>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Title</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start min-w-44">Description</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Message</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Image</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-[#1c243488]'>
                                {data && data?.map((item, index) => (
                                    <tr className='border-t border-gray-600' key={index}>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.title.length > 60 ? `${item.title.slice(0, 60)}...` : item.title}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start min-w-44'>{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.message}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <img src={item.image} alt="service" style={{ height: "50px", objectFit: "cover" }} />
                                        </td>
                                        <td className="px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
                                            <div className="flex items-center space-x-1">
                                                <HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/home/editbanner`, { state: item })} />
                                            </div>
                                        </td>
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

export default AdminHomeBanner;