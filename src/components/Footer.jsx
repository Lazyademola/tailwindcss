import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300'>
        <a href='#hero' className='block text-xl md:text-2xl font-semibold'>Ademola Mayowa</a>
        <a href='mailto:ademolamanboy@gmail.com'
        className=' text-sm md:text-md hover:text-gray-600'
        >ademolamanboy@gmail.com</a>
      <p className='text-xs mt-2 text-gray-500'>  © Ademola Mayowa {new Date().getFullYear() } All Rights Rese Ademola Mayowa {new Date().getFullYear() } All Rights Reserved</p>
    </div>
  )
}

export default Footer