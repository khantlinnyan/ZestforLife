import React from 'react'
import pic1 from '../assets/pic1.png'

const Section = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className='space-y-8 sm:mx-[150px] mx-4 mt-[100px] '>
            <h1 className='text-3xl  sm:text-5xl sm:text-left font-bold text-[#013B52] text-center'>Connecting you to <br/>mental health <br/>support</h1>
            <p className='sm:text-lg sm:text-left text-[#013B52] text-center text-sm'>We connect those suffer from metal health porblems to <br/>
            effective help-quickly and confidentially to <br/>
            everyone living in Myanmar.</p>
            <div className='sm:justify-start space-x-7 flex space-x-2 justify-center'>
                <button className='border-2 border-[#007E46] 
                rounded-full text-sm px-3 py-2 sm:px-6 sm:py-3 text-[#007E46] font-semibold'>Get support</button>
                <button className='border-2 border-[#013B52] 
                rounded-full text-sm px-3 py-2 sm:px-6 sm:py-3 text-[#013B52] font-semibold'>About us</button>
            </div>
        </div>
        <div className='flex justify-center'>
            <img className='max-w-[300px] sm:max-w-[600px]' src={pic1} alt="Chatting_image" />
        </div>
    </div>
  )
}

export default Section
