import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies =useSelector((store)=>store.movies.nowPlayingMovies)
  //This known as earlier return
  if(!movies) return
  const firstMovies = movies[0];
  const {original_title,overview,id}=firstMovies
  console.log(firstMovies,"firstMovies")
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>   
      <VideoBackground movieId ={id}/>
      
    </div>
  )
}

export default MainContainer
