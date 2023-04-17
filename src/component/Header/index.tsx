import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-[5rem] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <nav className="w-[80%] flex items-center justify-between p-[1rem] mx-auto  ">
        <Link to="/">
          <img
            className="my-2 w-[15%]"
            src="https://i.ibb.co/zGjyxBF/Logo.png"
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
