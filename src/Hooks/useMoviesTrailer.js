import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMoviesTrailer=(movieId)=>{
    const  dispatch = useDispatch();
     const getNowPlayingMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const movieData = await data.json();
        const filterData = movieData.results.filter((movie) => movie.type === "Trailer");
        const trailer = filterData.length ? filterData[0]:movieData.results[0];
        dispatch(addTrailer(trailer))

        console.log(trailer?.key,"trailer");
        console.log(filterData, "filterData");
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useMoviesTrailer;