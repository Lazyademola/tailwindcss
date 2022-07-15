import React from 'react'
import SectionTitle from './sectionTitle'
import works from '../data/works'

function Works() {
  return (
    <div className='py-12 '>
        <SectionTitle id='works'>
            Recent Works
        </SectionTitle>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    {works.map(work => {
         <worksItem
          key={work.title}
          imgUrl={work.imgUrl}
          title={work.title}
          tech={work.tech}
          workUrl={work.workUrl}
          >

         </worksItem>
    })}
    </div>
    </div>
    
  )
}

export default Works