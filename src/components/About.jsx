import React from 'react'
import webPic from '../assets/webPic.jpg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



const About = () => {
  return (
        <div className='flex flex-col md:flex-row justify-center items-center md:mx-2 '>
          
          <Bounce left cascade>
            <div className='xl:max-w-[400px] md:max-w-[300px] flex flex-col space-y-4 justify-center items-center md:items-start'>
              <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-2xl'>Who Are We?</h1>
              <h2 className='text-[#013B52] font-medium text-center md:text-left text-[12px] xl:text-sm '>Trix, a team of three individuals, were brought together by the organizer
               Hub and Hack for a coding competition focused on good health and well-being. Despite not having met each other before, they worked together seamlessly to create an
                innovative mental health support website that impressed the judges and won the competition. Their collaboration and dedication to the project are a testament to the 
                power of teamwork and the impact that can be made when individuals come together for a common cause. Have a great day ahaed!!</h2>
            </div>
          </Bounce>
          <Fade right>
            <div >
              <img src={webPic} alt="" className='w-[500px] xl:w-[700px]' />
            </div>
          </Fade>
        </div>
  )
}

export default About
