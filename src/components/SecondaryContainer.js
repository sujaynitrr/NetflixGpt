import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
     const popularMovies = useSelector((store) => store.movies?.popularMovies);
    return (
        nowPlayingMovies &&(
            <div className='relative -mt-10 z-20'>
            <MovieList title={"Now Playing"} movieType={nowPlayingMovies} />
            <MovieList title={"Treading"} movieType={nowPlayingMovies} />
            <MovieList title={"Popular"} movieType={popularMovies} />
             <MovieList title={"Upcoming"} movieType={nowPlayingMovies} />
        </div>
        )
        
    )
}

export default SecondaryContainer
