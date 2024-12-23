import React, { useEffect, useState } from 'react';
import { Pagination } from "@mui/material";
import axios from 'axios';

function AdminContact() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1101/api/contact');
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
    }, []);

    const handleSearchChange = (event) => {
        const term = event.target.value.toLowerCase().trim();
        setSearchTerm(term);

        if (term === '') {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) =>
                (item.name && item.name.toLowerCase().includes(term)) ||
                (item.email && item.email.toLowerCase().includes(term)) ||
                (item.phone && item.phone.toString().includes(term))
            );
            setFilteredData(filtered);
        }

        setCurrentPage(1);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='pt-[90px] bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
            <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Booking</h1>
            <div className='bg-white dark:bg-gray-900 rounded-md'>
                <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
                    <div className="grid sm:grid-cols-1 grid-cols-1 gap-4 bg-transparent">
                        <div className="bg-transparent space-y-1">
                            <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1">SEARCH</h1>
                            <input
                                type="text"
                                placeholder="Search by name, email, or phone"
                                className="w-full py-[10px] px-4 rounded-md text-xl bg-gray-200 text-gray-700 outline-none font-[500]"
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-transparent">
                        <table className="mt-3 w-full">
                            <thead className="text-white bg-[#1C2434]">
                                <tr className="bg-transparent">
                                    <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Name</th>
                                    <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Email</th>
                                    <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Phone</th>
                                    <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Subject</th>
                                    <th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Notes</th>
                                </tr>
                            </thead>
                            <tbody className='bg-[#1c243488]'>
                                {currentItems.map((item, index) => (
                                    <tr className='bg-transparent border-t border-gray-600' key={index}>
                                        <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.name}</td>
                                        <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.email}</td>
                                        <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.phone}</td>
                                        <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.subject}</td>
                                        <td className='bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.notes}</td>
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

export default AdminContact;