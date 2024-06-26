import "./Header.css";
import copperImg from '../asset/copper.png'

const Header = () => {
  return (
    <header className="header drop-shadow-md rounded-none hover:drop-shadow-xl">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="logo md:relative">
          <a href="/" className="flex items-center z-10">
            <img
              src={copperImg}
              className="copper-logo"
              alt="Copper's Logo"
            />
          </a>
          <div className="md:absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-800 dark:text-white" id="logo2">
              Powered by Yavar.ai
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;