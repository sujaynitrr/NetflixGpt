import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movieType }) {
    console.log(title, movieType, "title", "movies");
    return (
        movieType &&(
            <div className='px-6 bg-black'>
            <h1 className='text-3xl py-6 text-white'>{title}</h1>
            <div className='flex '>
                <div className='flex'>
                {
                    movieType?.map((movie) => <MovieCard imageUrl={movie.backdrop_path} />)
                }
            </div>
            </div>
            
        </div>

        )
        

    )
}

export default MovieList