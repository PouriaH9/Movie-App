const Banner = () => {
  return (
    <div className="w-[100%] h-[300px] mx-auto  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
      <div className="p-2">
        <h2 className="text-4xl m-3 text-white font-bold font-sans">Welcome.</h2>
        <h3 className="text-white mt-3 font-sans">
          Millions of movies, TV shows and people to discover!
        </h3>
      </div>
      <div className="mt-5 flex items-center">
        <div className="flex space-x-1 mx-auto">
          <input
            type="text"
            className="block w-[400px] px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-purple-600 rounded-full ">
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
