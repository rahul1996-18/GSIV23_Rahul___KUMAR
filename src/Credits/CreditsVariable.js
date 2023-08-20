import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovieCredits, setCredits } from "../redux/movieSlice";
import { fetchsingleMovieDetails } from "../redux/movieSlice";
import { setsinglemovie } from "../redux/movieSlice";

const CreditsVariable = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const cast = useSelector((state) => state.movies.cast);
  const director = useSelector((state) => state.movies.director);
  useEffect(() => {
    const fetchData = async () => {
      const movie = await fetchsingleMovieDetails(movieId);
      const credits = await fetchMovieCredits(movieId);
      const directorInfo = credits.crew.find(
        (person) => person.job === "Director"
      );

      dispatch(setCredits({ cast: credits.cast, director: directorInfo }));
      dispatch(setsinglemovie(movie));
    };
    fetchData();
  }, [dispatch, movieId]);
  return (
    <div className="flex flex-col">
      {director && (
        <p className="">
          <span className="font-bold">Director:</span>
          {director.name}
        </p>
      )}
      <div className="flex">
        <p className=" font-bold">Cast:</p>
        {cast?.slice(0, 3).map((cast) => {
          return (
            <li className="list-none  flex flex-wrap mx-2" key={cast.id}>
              {cast.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default CreditsVariable;
