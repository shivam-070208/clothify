import React from 'react'
 import Intro from '@/component/Intro'

const page = () => {

  return (
    <div>
      <div className='w-screen fixed  h-screen z-[-1]'>
        <Intro />
      </div>
      <div className='w-screen absolute top-[100%] h-screen bg-red-300 pointer-events-none'> </div>
      
    </div>
  )
}

export default page
