// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { HiPencil } from "react-icons/hi";
// import { useNavigate } from 'react-router-dom';

// function AdminTeamMember() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTeamMembers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:1101/api/team');
//                 if (response.data.success === 1) {
//                     setData(response.data.result);
//                 } else {
//                     console.error(response.data.message);
//                 }
//             } catch (error) {
//                 console.error(error.message);
//             }
//         };
//         fetchTeamMembers();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(`http://localhost:1101/api/team/delete/${id}`);
//             if (response?.data?.success === 1) {
//                 setData((prevData) => prevData.filter((item) => item._id !== id));
//             } else {
//                 console.error(response?.data?.message || "Delete failed");
//             }
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     return (
//         <div className='pt-[90px] bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
//             <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Team Members</h1>
//             <div className='bg-white dark:bg-gray-900 rounded-md'>
//                 <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
//                     <div className="overflow-x-auto bg-transparent">
//                         <table className="mt-3 w-full">
//                             <thead className="text-white bg-[#1C2434]">
//                                 <tr>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Name</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Expertise</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Facebook</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Instagram</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Twitter</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">LinkedIn</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Image</th>
//                                     <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className='bg-[#1c243488]'>
//                                 {data.map((item, index) => (
//                                     <tr className='border-t border-gray-600' key={index}>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.name}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.expertise}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.facebook}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.instagram}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.twitter}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.linkedin}</td>
//                                         <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
//                                             <img src={item.image} alt="team" style={{ height: "50px", objectFit: "cover" }} />
//                                         </td>
//                                         <td className="px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
//                                             <div className="flex items-center space-x-1">
//                                                 <HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/editteam`, { state: item })} />
//                                                 <MdDelete className="text-[#f11133] bg-[#ffdfe4] rounded-md cursor-pointer text-[26px] p-1" onClick={() => handleDelete(item._id)} />
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminTeamMember;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AdminTeamMember() {
    const [data, setData] = useState([]);
    const [permissions, setPermissions] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('http://localhost:1101/api/team');
                if (response.data.success === 1) {
                    setData(response.data.result);
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchTeamMembers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:1101/api/team/delete/${id}`);
            if (response?.data?.success === 1) {
                setData((prevData) => prevData.filter((item) => item._id !== id));
            } else {
                console.error(response?.data?.message || "Delete failed");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const token = sessionStorage.getItem('Admin');
                const response = await axios.get('http://localhost:1101/api/admin/admin-panel', {
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
            <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Team Members</h1>
            <div className='bg-white dark:bg-gray-900 rounded-md'>
                <div className="mt-3 bg-white dark:bg-[#1C2434] rounded-md p-5 overflow-clip">
                    <div className="overflow-x-auto bg-transparent">
                        <table className="mt-3 w-full">
                            <thead className="text-white bg-[#1C2434]">
                                <tr>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Name</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Expertise</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Facebook</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Instagram</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Twitter</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">LinkedIn</th>
                                    <th className="px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">Image</th>
                                    {(permissions?.hometeammember?.includes('edit') || permissions?.hometeammember?.includes('delete')) && (<th className="bg-transparent px-2 py-2 border-r dark:bg-gray-900 border-gray-600 text-start">ACTION</th>)}
                                </tr>
                            </thead>
                            <tbody className='bg-[#1c243488]'>
                                {data.map((item, index) => (
                                    <tr className='border-t border-gray-600' key={index}>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.name}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>{item.expertise}</td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <a href={item.facebook} target='_blank'> {item.facebook && <FaFacebook className="text-blue-600 text-xl" />}</a>
                                        </td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <a href={item.instagram} target='_blank'> {item.instagram && <FaInstagram className="text-pink-600 text-xl" />}</a>
                                        </td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <a href={item.twitter} target='_blank'> {item.twitter && <FaTwitter className="text-blue-400 text-xl" />}</a>
                                        </td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <a href={item.linkedin} target='_blank'> {item.linkedin && <FaLinkedin className="text-blue-700 text-xl" />}</a>
                                        </td>
                                        <td className='px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start'>
                                            <img src={item.image} alt="team" style={{ height: "50px", objectFit: "cover" }} />
                                        </td>
                                        {(permissions?.hometeammember?.includes('edit') || permissions?.hometeammember?.includes('delete')) && (<td className="bg-transparent px-2 py-2 border-r text-gray-200 dark:bg-gray-700 border-gray-600 text-start">
                                            <div className="bg-transparent flex items-center space-x-1">
                                                {permissions?.hometeammember?.includes('edit') && (<HiPencil className="text-[#1a9f53] bg-[#ddfbe9] rounded-md cursor-pointer text-[26px] p-1" onClick={() => navigate(`/admin/home/editteam`, { state: item })} />)}
                                                {permissions?.hometeammember?.includes('delete') && (<MdDelete className="text-[#f11133] bg-[#ffdfe4] rounded-md cursor-pointer text-[26px] p-1" onClick={() => handleDelete(item._id)} />)}
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

export default AdminTeamMember;
