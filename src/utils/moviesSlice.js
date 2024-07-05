import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload

        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload

        },
        addTrailer:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailer,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer