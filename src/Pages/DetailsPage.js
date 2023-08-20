import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchsingleMovieDetails, setsinglemovie } from "../redux/movieSlice";
import { img_300, img_not_available } from "../config";
import CreditsVariable from "../Credits/CreditsVariable";
import { AiFillStar } from "react-icons/ai";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const singleMovieDetails = useSelector(
    (state) => state.movies.singleMovieDetails
  );

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const movie = await fetchsingleMovieDetails(movieId);

      dispatch(setsinglemovie(movie));
    };
    fetchData();
  }, [dispatch, movieId]);
  const ImageURL = singleMovieDetails.poster_path
    ? img_300 + singleMovieDetails.poster_path
    : img_not_available;
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-2">
          <img src={ImageURL} alt="details" className="w-60 shadow-lg" />
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="d-flex align-items-center">
            <h1 className="font-bold text-2xl py-2 ">
              {singleMovieDetails.title}
            </h1>
            <p className="ml-2 p-2 flex text-3xl">
              (Rating:
              <AiFillStar className="w-5 h-6 mt-2 ml-2" />
              {singleMovieDetails.vote_average})
            </p>
            </div>
          </div>
          <div className="flex">
            <p className="text-slate-700">
              {singleMovieDetails.release_date} |
            </p>
            <p className="ml-2 text-slate-700">
              <strong>Runtime:</strong>
              {singleMovieDetails.runtime} mins
            </p>
          </div>
          <div>
            <CreditsVariable />
          </div>
          <div>
            <strong>Description:</strong>
            {singleMovieDetails.overview}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
