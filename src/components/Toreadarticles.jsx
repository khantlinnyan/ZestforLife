import React from 'react'
import Pic from '../assets/webPic1.jpg'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



const Toreadarticles = () => {
  return (
    
      <div className='flex flex-col md:flex-row justify-center items-center  '>
        <Fade left>
            <img src={Pic} alt="" className='w-[500px]  md:w-[500px] xl:w-[700px]' />
        </Fade>
        <Bounce right cascade>
          <div className='flex flex-col space-y-4 justify-center items-center md:items-start'>
            <h1 className='font-semibold text-3xl text-[#013B52] text-center md:text-left md:text-3xl'>Read Articles</h1>
            <h2 className='text-[#013B52] font-medium text-center md:text-left text-sm'>We are highly passionate about Web and Mobile <br/>
              application Development Services.</h2>
            <div>
              <button className='bg-[#013B52] px-4 py-3 md:px-6 md:py-3 text-sm md:text-ls my-4 rounded-[5px] text-white'>Start Reading</button>
            </div>
          </div>
        </Bounce>
      </div>
  )
}

export default Toreadarticles
