import React from 'react'
import { IMAGE_URL } from '../utils/constant';

function MovieCard({imageUrl}) {
  return (
    <div className='w-48 pr-4'>
        <div>
            <img src={IMAGE_URL+imageUrl} alt='Now playing'/>
        </div>
    </div>
  )
}

export default MovieCard