import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchMovieById from "../../services/FetchMovie";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const Movie = () => {
  const { id } = useParams();
  const { data: movie } = useFetchMovieById(id || "");

  const navigate = useNavigate();
  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between mt-8 hover:text-yellow-500">
          <FiArrowLeft
            size={24}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </div>
        <div className="flex mt-8">
          <div>
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.original_title}
              />
            </div>
          </div>
          <div className="w-2/3 p-4 mr-[100px]">
            <h4 className="text-3xl font-bold text-left mb-4">
              {movie?.original_title}
            </h4>
            <p className="text-lg text-left mb-4">{movie?.overview}</p>
            <div className="flex items-center mb-4">
              <AiFillStar size={24} className="mr-2 text-yellow-400" />
              <span className="text-xl">{movie?.vote_average}</span>
            </div>
            <div className="text-lg text-left mb-4">
              <span>
                Type
                <strong className="ml-2">Movie</strong>
              </span>
              <span className="ml-4">
                Release Data
                <strong className="ml-2">{movie?.release_date}</strong>
              </span>
              <span className="ml-4">
                Run Time
                <strong className="ml-2">{movie?.runtime}</strong>
              </span>
              <span className="ml-4">
                Genres
                <strong className="ml-2 bg-gray-50">
                  {movie?.genres.map(({ name }) => name).join(", ")}
                </strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
