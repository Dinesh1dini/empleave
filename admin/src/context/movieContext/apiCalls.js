import axios from "axios";

import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";





export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:5000/api/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
  };





  export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
        
       try {
         const res = await axios.post("http://localhost:5000/api/movies", movie, {
         headers: {
         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
      dispatch(createMovieSuccess(res.data));
      alert("sucess");
    } catch (err) {
      dispatch(createMovieFailure());
    }
  };



  export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
      await axios.delete("http://localhost:5000/api/movies/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteMovieSuccess(id));
    } catch (err) {
      dispatch(deleteMovieFailure());
    }
  };
  