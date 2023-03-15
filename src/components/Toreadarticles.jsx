import React from 'react'
import Pic from '../assets/webPic3.jpg'
import { Link } from 'react-router-dom';



const Toreadarticles = () => {
  return (
    
      <div className='flex flex-col md:flex-row justify-center items-center md:mx-6 '>
            <img src={Pic} alt="" className='w-[500px] xl:w-[800px]' />
          <div className='xl:max-w-[400px] md:max-w-[300px] flex flex-col space-y-4 justify-center items-center md:items-start'>
            <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-2xl'>Read Articles</h1>
            <h2 className='text-[#013B52] font-medium text-center md:text-left text-[12px] xl:text-sm'>We provide articles about mental health and topics related to it. They can offer information, tips, and insights
            on various mental health issues and wellness practices to you. They serve as a valueable resource of anyone looking to improve their mental health well being.</h2>
            <div>
              <Link to='./articles' className='bg-[#013B52] hover:bg-green-500 duration-500 px-4 py-3 md:px-6 md:py-3 text-sm md:text-ls my-4 rounded-full text-white'>Start Reading</Link>
            </div>
          </div>
      </div>
  )
}

export default Toreadarticles
