import axios from 'axios';
import React, { useRef, useState } from 'react';

function AddHomeBanner() {
    const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null);

    const imageInputRef = useRef(null);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('message', message);
            formData.append('image', image);

            const response = await axios.post(`https://coffe-shop-btr1.onrender.com/api/banner/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);

            if (response.data?.success === 1) {
                setTitle('');
                setDescription('');
                setMessage('');
                setImage(null);

                if (imageInputRef.current) imageInputRef.current.value = '';
            } else {
                console.log(response.data?.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="pt-[90px] h-screen bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8">
            <h1 className="text-3xl font-semibold pb-2 dark:text-white">Add Home Banner</h1>
            <div className="dark:bg-gray-700 bg-white rounded-md mt-10">
                <div className="grid sm:grid-cols-2 col-end-1 md:gap-10 gap-5 rounded-md p-8">
                    <div className="col-span-1 w-full space-y-2">
                        <label htmlFor="title" className="dark:text-white text-gray-800 font-semibold text-2xl">Title :-</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full outline-none rounded-sm px-5 py-2 bg-gray-300"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 w-full space-y-2">
                        <label htmlFor="description" className="dark:text-white text-gray-800 font-semibold text-2xl">Description :-</label>
                        <input
                            type="text"
                            id="description"
                            className="w-full outline-none rounded-sm px-5 py-2 bg-gray-300"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 w-full space-y-2">
                        <label htmlFor="message" className="dark:text-white text-gray-800 font-semibold text-2xl">Category :-</label>
                        <input
                            type="text"
                            id="message"
                            className="w-full outline-none rounded-sm px-5 py-2 bg-gray-300"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="col-span-1 w-full space-y-2">
                        <label htmlFor="image" className="dark:text-white text-gray-800 font-semibold text-2xl">Image :-</label>
                        <input
                            type="file"
                            id="image"
                            className="w-full outline-none rounded-sm px-5 py-2 bg-gray-300"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
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

export default AddHomeBanner;