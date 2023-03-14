import React from 'react'
import webPic from '../assets/webPic.jpg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



const About = () => {
  return (
    <div className='flex flex-col items-center space-y-10 '>
        <div className='flex flex-col md:flex-row items-center md:space-x-20 '>
          <Bounce left cascade>
            <div className='flex flex-col space-y-4'>
              <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-3xl'>Who Are We?</h1>
              <h2 className='text-[#013B52] font-medium text-center md:text-left text-sm'>We are highly passionate about Web and Mobile <br/>
              application Development Services.</h2>
            </div>
          </Bounce>
          <Fade right>
            <div >
              <img src={webPic} alt="" className='w-[500px]  md:w-[600px] xl:w-[700px]' />
            </div>
          </Fade>
        </div>
    </div>
  )
}

export default About
