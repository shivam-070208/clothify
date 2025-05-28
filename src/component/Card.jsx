import React from 'react'

const Card = ({prop}) => {
  return (
    <div className='w-full h-full '>
      <div className='w-full h-1/2'><img src={prop.img} className='w-full rounded-t-xl h-full' alt="rahul" /></div>
      <div className='w-full h-1/2'>
      <h1>{prop.Tittle}</h1>
      <p className='line-clamp-4'>{prop.Content}</p>
      <div className='w-full flex justify-end'><span>{prop.price}</span><button>Buy Now</button></div>
      </div>
    </div>
  )
}

export default Card
