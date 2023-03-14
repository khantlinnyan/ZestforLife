import React from 'react'
import webPic from '../assets/webPic1.jpg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



const About = () => {
  return (
        <div className='flex flex-col md:flex-row justify-center items-center md:mx-2 '>
          
          <Bounce left cascade>
            <div className='xl:max-w-[400px] md:max-w-[300px] flex flex-col space-y-4 justify-center items-center md:items-start'>
              <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-2xl'>Chat anonymously</h1>
              <ul className='text-[#013B52] font-medium text-center md:text-left text-[12px] xl:text-sm list-disc'>
               <li>This is the main purpose of our creation, able to chat with those feel the same as them.</li>
               <li>You can be comforted or comfort to other in positive way</li>
               <li>In this chatting room, you can't scroll up to the previous message: this happened for all of our users' pravicies. </li>
               </ul>
               <div>
                <button className='bg-[#013B52] hover:bg-green-500 duration-500 px-4 py-3 md:px-6 md:py-3 text-sm xl:text-ls my-4 rounded-full text-white'>Start Chatting </button>
                </div>
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
