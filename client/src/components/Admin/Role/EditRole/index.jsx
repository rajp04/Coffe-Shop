import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditRole() {

    const { state } = useLocation();

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
            permissions: formattedPermissions,
        };

        try {
            const token = sessionStorage.getItem('Admin');
            const id = state?.role._id;
            console.log(id);

            if (!id) {
                console.error('Role ID is missing');
                return;
            }

            const roleResponse = await axios.put(
                `https://coffe-shop-btr1.onrender.com/api/admin/roles/${id}`,
                payload,
                {
                    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                }
            );
            const roleData = roleResponse.data;
            console.log('Role saved:', roleData);

            // Reset state after saving
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
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };


    return (
        <div className="pt-[90px] h-screen bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8">
            <h1 className="text-3xl font-semibold pb-2 dark:text-white">Edit Role</h1>
            <div className="dark:bg-gray-700 bg-white rounded-md mt-10">
                <div className="gap-5 rounded-md p-8">
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

export default EditRole;