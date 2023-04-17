import React, { useState } from "react";
import usePaginatedFetchMovies from "../../services/PaginateMovies";
import Card, { MovieCardData } from "../../component/Card";
import Banner from "../../component/Banners/Banner";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data: movies, isLoading } = usePaginatedFetchMovies(page);

  console.log("movies=>", movies);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <Banner />
          <div className="row">
            {movies?.map(
              ({ id, poster_path, original_title }: MovieCardData) => {
                return (
                  <Card
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                  />
                );
              }
            )}
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
