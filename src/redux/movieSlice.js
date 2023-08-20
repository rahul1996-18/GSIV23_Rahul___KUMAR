import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";
export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async (page) => {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    console.log(response,"res")

    return response.data;
  }
);
export const fetchsingleMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

const initialState = {
  movies: [],
  loading: false,
  error: null,
  singleMovieDetails: [],
  page: 1,
  totalresults: 0,
  total_pages: 0,
  searchTerm:"",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setsinglemovie: (state, action) => {
      state.singleMovieDetails = action.payload;
    },
    setCredits: (state, action) => {
      state.cast = action.payload.cast;
      state.director = action.payload.director;
    },
    
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
    
  },
  extraReducers: {
    [fetchUpcomingMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchUpcomingMovies.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload?.results], // Spread the new movie results array
        page: action.payload.page,
        totalresults: action.payload?.total_results,
        total_pages: action.payload?.total_pages,
      };
    },
    [fetchUpcomingMovies.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setsinglemovie, setCredits,setSearchTerm} = movieSlice.actions;

export default movieSlice.reducer;
