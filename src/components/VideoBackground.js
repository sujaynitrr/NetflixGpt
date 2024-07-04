import {  useSelector } from 'react-redux'
import useMoviesTrailer from '../Hooks/useMoviesTrailer'

const VideoBackground = ({ movieId }) => {
    useMoviesTrailer(movieId);
    const movieTrailerId=useSelector((store)=>store.movies.trailerVideo);
    console.log(movieTrailerId,"movieTrailerId");
    // fetch trailer video
   
    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+movieTrailerId?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground
