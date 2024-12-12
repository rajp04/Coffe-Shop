import React, { useState } from 'react'
import axios from 'axios'

function Reservation() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [seats, setSeats] = useState()
    const [notes, setNotes] = useState()

    const handleBook = async (e) => {
        e.preventDefault();
  
        const data = { name, email, phone, date, time, seats, notes }

        try {
            const response = await axios.post(`http://localhost:1101/api/booking/create`, data);

            if (response.data.success === 1) {
                console.log(response.data);
                setName('')
                setEmail('')
                setPhone('')
                setNotes('')
                setSeats('')
                setTime('')
                setDate('')
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log('Try Again.');
        }
    }
    return (
        <div className='h-auto sm:p-10 p-5 w-[85%] m-auto bg-[#F4EEE4] lg:mt-20 mt-10'>
            <div className='flex flex-col h-full items-center justify-center'>
                <h1 className='uppercase text-[#C5A572]'>Reservation</h1>
                <h1 className='font-[Bellefair] sm:text-[45px] text-[30px] pt-3 text-center'>Online Booking</h1>
                <div className='sm:w-[75%] xs:w-[80%] xxs:w-[90%] w-[95%] grid grid-cols-2 sm:gap-10 gap-5 lg:pt-14 sm:pt-8 pt-5'>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Name*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='E-mail*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Phone*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Date*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={date} onChange={(e)=> setDate(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Time*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={time} onChange={(e)=> setTime(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Seats*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={seats} onChange={(e)=> setSeats(e.target.value)}/>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>
                        <input type="text" placeholder='Notes*' className='w-full border-b-2 border-black opacity-80 pb-4 text-xl outline-none bg-transparent' value={notes} onChange={(e)=> setNotes(e.target.value)}/>
                    </div>
                </div>
                <button className='bg-black text-white mt-10 py-2 px-5' type='submit' onClick={handleBook}>Book A Table</button>
            </div>
        </div>
    )
}

export default Reservation