import React from "react";

import { AiFillStar } from "react-icons/ai";
import { img_300, img_not_available } from "../config";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const ImageURL = movie.poster_path
    ? img_300 + movie.poster_path
    : img_not_available;

  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className=" flex justify-center items-center cursor-pointer ">
          <div className=" w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img
              className="h-40 object-fill rounded-xl w-full "
              src={ImageURL}
              alt="first"
            />
            <div className="p-2 flex justify-between m-auto">
              <h2 className="font-bold text-lg mb-2 ">
                {movie?.title.substring(0, 15)}
              </h2>

              <span className="d-flex text-sm text-gray-600">
                <AiFillStar className="w-5 h-5" />
                <b>{movie.vote_average}</b>
              </span>
            </div>

            <div className="m-2">
              <p className="text-sm">{movie.overview.substring(0, 40)}...</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
