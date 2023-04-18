import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mx-auto h-[5rem] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-700 via-violet-900 to-black">
      <nav className="w-[80%] h-full flex items-center justify-between mx-auto  ">
        <Link to="/">
          <img
            className="my-2 w-[40px]"
            src="https://i.ibb.co/NLHcV5L/favicon.png"
            alt="logo"
          />
        </Link>
        <Link
          to="/favorites"
          className="text-gray-100 opacity-50 text-xl hover:text-yellow-300 hover:no-underline hover:opacity-80"
        >
          Favourites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
