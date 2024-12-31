import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditTeamMember() {
  const { state } = useLocation();
  const id = state?._id;

  const [name, setName] = useState(state?.name);
  const [expertise, setExpertise] = useState(state?.expertise);
  const [image, setImage] = useState(null);
  const [facebook, setFacebook] = useState(state?.facebook || '');
  const [instagram, setInstagram] = useState(state?.instagram || '');
  const [twitter, setTwitter] = useState(state?.twitter || '');
  const [linkedin, setLinkedin] = useState(state?.linkedin || '');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('expertise', expertise);
      formData.append('facebook', facebook);
      formData.append('instagram', instagram);
      formData.append('twitter', twitter);
      formData.append('linkedin', linkedin);
      if (image) formData.append('image', image);

      const response = await axios.put(`https://coffe-shop-btr1.onrender.com/api/team/update/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data?.success === 1) {
        navigate('/admin/home/team');
        setName('');
        setExpertise('');
        setImage(null);
        setFacebook('');
        setInstagram('');
        setTwitter('');
        setLinkedin('');
      } else {
        console.log(response.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='pt-[90px] h-screen bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
      <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Edit Team Member</h1>
      <div className='dark:bg-gray-700 bg-white rounded-md mt-10'>
        <div className='grid sm:grid-cols-2 col-end-1 md:gap-10 gap-5 rounded-md p-8'>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="name" className='dark:text-white text-gray-800 font-semibold text-2xl'>Name:</label>
            <input
              type="text"
              id="name"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="expertise" className='dark:text-white text-gray-800 font-semibold text-2xl'>Expertise:</label>
            <input
              type="text"
              id="expertise"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="facebook" className='dark:text-white text-gray-800 font-semibold text-2xl'>Facebook:</label>
            <input
              type="text"
              id="facebook"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="instagram" className='dark:text-white text-gray-800 font-semibold text-2xl'>Instagram:</label>
            <input
              type="text"
              id="instagram"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="twitter" className='dark:text-white text-gray-800 font-semibold text-2xl'>Twitter:</label>
            <input
              type="text"
              id="twitter"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="linkedin" className='dark:text-white text-gray-800 font-semibold text-2xl'>LinkedIn:</label>
            <input
              type="text"
              id="linkedin"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="image" className='dark:text-white text-gray-800 font-semibold text-2xl'>Image:</label>
            <input
              type="file"
              id="image"
              className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <button
          className='text-3xl mx-8 bg-gray-300 px-8 py-2 rounded-md my-5'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditTeamMember;