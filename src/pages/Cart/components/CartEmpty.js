import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <section className="max-w-4xl py-5 mx-auto my-10 text-xl text-center border rounded dark:text-slate-100 dark:border-slate-700">
      <div className="my-5">
        <p className="mb-5 text-green-600 bi bi-cart text-7xl"></p>
        <p>Oops! Your cart looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      <Link
        to="/products"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      >
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};
