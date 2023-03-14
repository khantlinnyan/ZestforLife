import React from 'react'
import Pic from '../assets/webPic2.jpg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Checking = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:mx-6 '>
      <Fade left>
            <img src={Pic} alt="" className='w-[400px]  xl:w-[800px]' />
        </Fade>
        <Bounce right cascade>
          <div className='xl:max-w-[400px] md:max-w-[300px] flex flex-col space-y-4 justify-center items-center md:items-start'>
            <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-2xl'>Let me know your mental health condition</h1>
            <ul className='text-[#013B52] font-medium text-center md:text-left text-[12px] xl:text-sm list-disc '>
              <li>Our mental health check system can provide a platform for individuals to assess their mental well-being.</li>
              <li>It of a questionnaire that evaluates various aspects of mental health, such as depression, anxiety, and stress levels.</li>
              <li>This tool can be a useful for individuals seeking to improve their mental health or identify potential issues.</li>
            </ul>
            <div>
              <button className='bg-[#013B52] hover:bg-green-500 duration-500 px-4 py-3 md:px-6 md:py-3 text-sm xl:text-ls my-4 rounded-full text-white'>Start Checking </button>
            </div>
          </div>
        </Bounce>
    </div>
  )
}

export default Checking