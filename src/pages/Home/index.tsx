import React, { useState } from "react";
import usePaginatedFetchMovies from "../../services/PaginateMovies";
import Card, { MovieCardData } from "../../component/Card";
import Banner from "../../component/Banners/Banner";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data: movies, isLoading } = usePaginatedFetchMovies(page);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("movies=>", movies);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <Banner />
          {/* searchbar */}
          <div className="flex items-center mt-3">
            <form className="flex space-x-1 mx-auto">
              <input
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                type="text"
                className="block w-[400px] px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="px-4 text-white bg-purple-600 rounded-full "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="row">
            {movies
              ?.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.original_title
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ id, poster_path, original_title }: MovieCardData) => {
                return (
                  <Card
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                  />
                );
              })}
          </div>
        </div>
      )}
      <footer className="mb-4">
        <button
          className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded"
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <p className="inline mx-4 text-xl p-2">{page}</p>
        <button
          className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded"
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={false}
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Home;
