import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <nav className="flex w-full flex-col items-center justify-between bg-gray-800 border-gray-700 text-gray-300">
      <h2 className="w-full text-center border-b border-gray-400 py-2 text-gray-50 text-xl">
        Custom Managment
      </h2>
      <Link
        to="/customers"
        className={`${
          currentUrl === '/customers' ? 'bg-gray-700' : 'text-white'
        } w-full block py-3 my-1  border-gray-700 text-center rounded-md text-gray-50 hover:bg-gray-700`}
      >
        Home
      </Link>

      <Link
        to="/customers/create-customer"
        className={`${
          currentUrl === '/customers/create-customer'
            ? 'bg-gray-700'
            : 'text-white'
        } w-full block py-3 my-1  border-gray-700 text-center rounded-md text-gray-50 hover:bg-gray-700`}
      >
        Create Customer
      </Link>
    </nav>
  );
};

export default Navbar;
