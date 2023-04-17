import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { FiArrowLeft } from "react-icons/fi";
import Card, { MovieCardData } from "../../component/Card";

const Favorites = () => {
  const { movies } = useAppSelector((state) => state.favorites);

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <FiArrowLeft className="mt-3 hover:text-yellow-500 cursor-pointer" size={24} onClick={() => navigate("/")} />
        </div>
        <h4 className="text-3xl  mb-4">Favorites</h4>
        {!movies.length && (
          <h3 className="mt-70">Please add your favorite movies</h3>
        )}
        <div className="flex flex-row flex-wrap">
          {movies?.map(({ id, poster_path, original_title }: MovieCardData) => {
            return (
              <Card
                key={id}
                id={id}
                poster_path={poster_path}
                original_title={original_title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorites;
