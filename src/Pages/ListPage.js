import React, { useEffect } from "react";
import MovieCard from "../Card/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies, setSearchMovieTitle } from "../redux/movieSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";
const ListPage = () => {
  const dispatch = useDispatch();
  const { page, movies, totalresults } = useSelector((state) => state.movies);
  const searchTerm = useSelector((state) => state.movies.searchTerm);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const fetchMoreData = () => {
    dispatch(fetchUpcomingMovies(page + 1));
  };
  useEffect(() => {
    dispatch(fetchUpcomingMovies(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        style={{ overflowY: "hidden" }}
        hasMore={movies.length < totalresults}
      >
        <div className="row d-flex justify-center">
          {filteredMovies?.map((movie, index) => {
            return (
              <div
                className=" col-xl-2 col-lg-3  col-md-3 col-sm-2 col-xs-1 p-2 m-2"
                key={`${movie.id}-${Math.random()}`}
              >
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListPage;
