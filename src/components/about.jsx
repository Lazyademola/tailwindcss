import React from 'react'
import SectionTitle from './sectionTitle'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12 '>
        <SectionTitle>  About Me  </SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
            I'm a rapper,writer ,software developer available for work at any moment,
            I communicate in English fluently.lol</p>
            <a href='mailto:ademolamanboy@gmail.com'
            className='block mt-3 text-md md:text-lg 
             text-gray-700  dark:text-gray-300 underline
              hover:text-indigo-600 dark:hover:text-indigo-500' 
            >
                ademolamanboy@gmail.com</a>  
        </div> 
        <img src={`https://avatars.githubusercontent.com/u/88086951?s=400&u=e8ea4f514ae898eed957e9d67af9a883993e6105&v=4`}
        alt='Ademola Mayowa' className='w-full md:w-6/12 round-lg  object-cover'
        />  
    </div>
  )
}

export default About