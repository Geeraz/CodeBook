import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <div
      id="dropdownAvatar"
      className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded shadow select-none top-10 w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/login"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/register"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
