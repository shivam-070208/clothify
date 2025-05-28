"use client"
import React, { useEffect, useState } from 'react'
import { loadGLBModel } from './Modelloader'
import Modeimport from './Modeimport'

import *as Modelarray from '../../../public/Models/index'
const page = () => {
    const array =['/Models/japanese_clothes.glb','/Models/jackets.glb']
    const [i,si]=useState(array[0])

  return (
    <div className='w-screen h-screen md:columns-2 columns-1 ' >

      <Modeimport i={i} />
   
    </div>
  )
}

export default page
