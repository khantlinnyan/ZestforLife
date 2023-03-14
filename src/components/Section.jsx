import React from 'react'
import pic1 from '../assets/pic1.png'
import About from './About'
import Toreadarticles from './Toreadarticles'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Checking from './Checking';
import Tochat from './Tochat';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <div className='flex flex-col space-y-5 overflow-x-hidden mx-10'>
      <div className='flex flex-col md:flex-row justify-around items-center mt-[20px] md:mx-10'>
          <Bounce left cascade>
            <div className='space-y-8 ml-4 items-left flex flex-col'>
                <h1 className='text-3xl font-bold text-[#013B52] text-center md:text-4xl md:text-left lg:text-6xl'>Connecting you to <br/>mental health <br/>support</h1>
                <p className=' text-[#013B52] text-center text-sm md:text-left md:text-[15px] lg:text-base'>We connect those suffer from metal health porblems to <br/>
                effective help-quickly and confidentially to <br/>
                everyone living in Myanmar.</p>
                <div className='lg:justify-start md:items-start md:flex-col md:space-y-3 md:space-x-0 items-left lg:items-center lg:flex-row lg:space-y-0 lg:space-x-7 space-x-7 flex space-x-2 justify-center'>
                    <Link to='/getsupport' className='border-2 border-[#013B52] 
                    rounded-full text-sm px-3 py-2 text-[#013B52] font-semibold px-5 lg:py-3 text-sm xl:px-6 xl:py-3 xl:text-base'>Get support</Link>
                </div>
            </div>
          </Bounce>
          <Fade right className='flex justify-center'>
              <img className='max-w-[350px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]' src={pic1} alt="Chatting_image" />
          </Fade>
      </div>
      <div className='h-[1.5px] w-full bg-gray-300'></div>
      <Checking></Checking>
      <div className='h-[1.5px] w-full bg-gray-300'></div>
      <Tochat></Tochat>
      <div className='h-[1.5px] w-full bg-gray-300'></div>
      <Toreadarticles></Toreadarticles>
      <div className='h-[1.5px] w-full bg-gray-300'></div>
      <About></About>
    </div>
  )
}

export default Section
