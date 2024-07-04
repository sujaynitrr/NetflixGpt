import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[30%] px-12 w-screen aspect-video absolute  text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-gray-500 text-white p-1 m-1 px-12 text-xl bg-opacity-50 rounded-lg'>▶️Play</button>
        <button className='bg-gray-500 text-white p-1 m-1 px-12 text-xl bg-opacity-50 rounded-lg'>info</button>
      </div>
    </div>
  )
}

export default VideoTitle
