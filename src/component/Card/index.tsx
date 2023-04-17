import { useState } from "react";
import { MovieType } from "../../common/types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addFavorite, removeFavorite } from "../../features/favMovieSlice";

export type MovieCardData = Omit<
  MovieType,
  "overview" | "vote_average" | "release_date" | "runtime" | "genres"
>;

const Card = (movieData: MovieCardData) => {
  const { movies } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const [isFavorites, setIsFavorites] = useState<boolean>(() => {
    const isFavoriteMovie = movies.find((movie) => movie.id === movieData.id);
    return !!isFavoriteMovie;
  });

  const handleFavorites = () => {
    if (isFavorites) {
      dispatch(removeFavorite(movieData.id));
      setIsFavorites((prevState) => !prevState);
    } else {
      dispatch(addFavorite(movieData));
      setIsFavorites((prevState) => !prevState);
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-md relative">
        <h4 className="absolute top-0 right-0 m-2">
          <i>
            {isFavorites ? (
              <AiFillStar
                size={24}
                onClick={handleFavorites}
                className="text-yellow-500 cursor-pointer"
              />
            ) : (
              <AiOutlineStar
                size={24}
                onClick={handleFavorites}
                className="text-gray-500 cursor-pointer hover:text-yellow-500"
              />
            )}
          </i>
        </h4>
        <img
          className="w-full object-cover rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.original_title}
        />
        <Link
          to={`/movie/${movieData.id}`}
          className="block text-center py-4 px-2"
        >
          <h5 className="text-lg font-semibold">{movieData.original_title}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;
