import axios from 'axios'
import React, { useState } from 'react'

function AddMenu() {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()

  const handleSubmit = async () => {
    try {
      const data = { name, description, category, price }

      const response = await axios.post(`http://localhost:1101/api/menu/create`, data);
      console.log(response);

      if (response.data?.success === 1) {
        setName('')
        setDescription('')
        setCategory('')
        setPrice('')
      } else {
        console.log(response.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='pt-[90px] h-screen bg-[#F1F5F9] dark:bg-gray-900 pb-8 px-8'>
      <h1 className='text-3xl font-semibold pb-2 dark:text-white'>Add Menu Items</h1>
      <div className='dark:bg-gray-700 bg-white rounded-md mt-10'>
        <div className='grid sm:grid-cols-2 col-end-1 md:gap-10 gap-5 rounded-md p-8'>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="" className='dark:text-white text-gray-800 font-semibold text-2xl'>Name :-</label>
            <input type="text" className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="" className='dark:text-white text-gray-800 font-semibold text-2xl'>Description :-</label>
            <input type="text" className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300' value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="" className='dark:text-white text-gray-800 font-semibold text-2xl'>Category :-</label>
            <input type="text" className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300' value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className='col-span-1 w-full space-y-2'>
            <label htmlFor="" className='dark:text-white text-gray-800 font-semibold text-2xl'>Price :-</label>
            <input type="text" className='w-full outline-none rounded-sm px-5 py-2 bg-gray-300' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>
        <button className='text-3xl mx-8 bg-gray-300 px-8 py-2 rounded-md my-5' type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default AddMenu