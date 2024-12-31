import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function AddRole() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isVisiable, setIsVisiable] = useState(true);
    const [password, setPassword] = useState('');
    const [permissions, setPermissions] = useState({
        dashboard: { all: false, view: false, edit: false, add: false, delete: false },
        booking: { all: false, view: false, edit: false, add: false, delete: false },
        menu: { all: false, view: false, edit: false, add: false, delete: false },
        gallery: { all: false, view: false, edit: false, add: false, delete: false },
        service: { all: false, view: false, edit: false, add: false, delete: false },
        blog: { all: false, view: false, edit: false, add: false, delete: false },
        contact: { all: false, view: false, edit: false, add: false, delete: false },
        role: { all: false, view: false, edit: false, add: false, delete: false },
        homebanner: { all: false, view: false, edit: false, add: false, delete: false },
        hometestimonial: { all: false, view: false, edit: false, add: false, delete: false },
        hometeammember: { all: false, view: false, edit: false, add: false, delete: false },
    });

    // Handle "All" checkbox toggling
    const handleAllCheck = (section) => {
        const allChecked = !permissions[section].all;
        setPermissions({
            ...permissions,
            [section]: {
                all: allChecked,
                view: allChecked,
                edit: allChecked,
                add: allChecked,
                delete: allChecked,
            },
        });
    };

    // Handle individual checkbox toggling
    const handleIndividualCheck = (section, key) => {
        const updatedSection = {
            ...permissions[section],
            [key]: !permissions[section][key],
        };

        updatedSection.all =
            updatedSection.view && updatedSection.edit && updatedSection.add && updatedSection.delete;

        setPermissions({ ...permissions, [section]: updatedSection });
    };

    const handleSubmit = async () => {
        const formattedPermissions = Object.keys(permissions).reduce((acc, section) => {
            acc[section] = Object.keys(permissions[section])
                .filter((key) => key !== 'all' && permissions[section][key]);
            return acc;
        }, {});

        const payload = {
            name,
            permissions: formattedPermissions,
        };

        try {
            const token = sessionStorage.getItem('Admin');
            const roleResponse = await axios.post(
                'https://coffe-shop-btr1.onrender.com/api/admin/roles',
                payload,
                {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                }
            );
            const roleData = roleResponse.data;

            const newAdmin = {
                email,
                password,
                username: name,
                role: roleData?.role?._id,
            };

            const adminResponse = await axios.post(
                'https://coffe-shop-btr1.onrender.com/api/admin/admins',
                newAdmin,
                {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                }
            );

            setName('');
            setEmail('');
            setPassword('');
            setPermissions({
                dashboard: { all: false, view: false, edit: false, add: false, delete: false },
                booking: { all: false, view: false, edit: false, add: false, delete: false },
                menu: { all: false, view: false, edit: false, add: false, delete: false },
                gallery: { all: false, view: false, edit: false, add: false, delete: false },
                service: { all: false, view: false, edit: false, add: false, delete: false },
                blog: { all: false, view: false, edit: false, add: false, delete: false },
                contact: { all: false, view: false, edit: false, add: false, delete: false },
                role: { all: false, view: false, edit: false, add: false, delete: false },
                homebanner: { all: false, view: false, edit: false, add: false, delete: false },
                hometestimonial: { all: false, view: false, edit: false, add: false, delete: false },
                hometeammember: { all: false, view: false, edit: false, add: false, delete: false },
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleVisiable = () => {
        setIsVisiable(!isVisiable);
    }

    return (
        <div className="pt-[90px] h-screen bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8">
            <h1 className="text-3xl font-semibold pb-2 dark:text-white">Add New Role</h1>
            <div className="dark:bg-gray-700 bg-white rounded-md mt-5">
                <div className="gap-5 rounded-md p-8">
                    <div className="md:w-[50%] sm:w-[70%] w-full space-y-2">
                        <label htmlFor="name" className="dark:text-white text-gray-800 font-semibold text-2xl">Name :-</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full outline-none rounded-sm px-5 py-2 bg-gray-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='pt-3 space-y-3'>
                        <div className="col-span-2 w-full pb-5">
                            <label htmlFor="permissions" className="dark:text-white text-gray-800 font-semibold text-2xl">
                                Permissions :-
                            </label>
                        </div>

                        {/* Permissions Section */}
                        {Object.keys(permissions).map((section) => (
                            <div key={section} className='space-x-10 flex items-center font-semibold'>
                                <label className="dark:text-white w-[250px] text-gray-800 font-semibold text-2xl">
                                    {section.charAt(0).toUpperCase() + section.slice(1)} :-
                                </label>

                                {['all', 'view', 'edit', 'add', 'delete'].map((key) => (
                                    <div key={key} className='flex items-center justify-center space-x-2'>
                                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                        <input
                                            type="checkbox"
                                            checked={permissions[section][key]}
                                            onChange={() =>
                                                key === 'all'
                                                    ? handleAllCheck(section)
                                                    : handleIndividualCheck(section, key)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="pt-10 grid sm:grid-cols-2 grid-cols-1 gap-4 bg-transparent">
                        <div className="bg-transparent space-y-1">
                            <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1 text-2xl">Email</h1>
                            <input
                                value={email}
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-[10px] px-4 rounded-md text-xl bg-gray-200 text-gray-700 outline-none font-[500]"
                            />
                        </div>
                        <div className="bg-transparent space-y-1 relative">
                            <h1 className="bg-transparent font-bold text-gray-700 dark:text-gray-100 pb-1 text-2xl">Password</h1>
                            <input type={`${isVisiable === true ? "password" : ""}`} name="" placeholder='Enter your password' className='w-full py-[10px] px-4 rounded-md text-xl bg-gray-200 text-gray-700 outline-none font-[500]' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className='bg-transparent absolute right-5 top-[51px]' onClick={handleVisiable}>
                                {
                                    isVisiable === true ?
                                        <FaEyeSlash className='bg-transparent text-xl hover:text-gray-700 cursor-pointer' />
                                        :
                                        <FaEye className='bg-transparent text-xl hover:text-gray-700 cursor-pointer' />
                                }
                            </div>
                        </div>
                        <div className='bg-white flex items-center hover:text-blue-500 transition-all justify-center rounded-md px-3 py-1 w-full text-gray-700 '>

                        </div>
                    </div>
                </div>
                <button
                    className="text-3xl mx-8 bg-gray-300 px-8 py-2 rounded-md my-5"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default AddRole;