"use client"
import React, { useEffect, useState } from 'react'
import { loadGLBModel } from './Modelloader'
import Modeimport from './Modeimport'
import Card from '@/component/Card'
import { SellData } from './Utils'
import *as Modelarray from '../../../public/Models/index'
const page = () => {
    const array =['/Models/japanese_clothes.glb','/Models/jackets.glb']
    const [i,si]=useState(array[0])
    useEffect(()=>{
      console
    })

  return (
    <div className=' min-h-screen  lg:columns-2 columns-1 gap-[10px] pt-14 mr-2' >

      <Modeimport i={i} />
      <div className='grid sm:grid-cols-2 mt-4 grid-cols-1 gap-2 w-full lg:max-h-[calc(99vh-56px)] h-[50vh] md:h-full overflow-y-scroll '>
        {SellData.map((item,i)=>(
          <div key={i} >
          <Card prop={item} />
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default page
