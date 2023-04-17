import { Link } from "react-router-dom";

export const OrderSuccess = ({ data }) => {
  return (
    <section className="max-w-4xl py-5 mx-auto my-10 text-xl text-center border rounded dark:text-slate-100 dark:border-slate-700">
      <div className="my-5">
        <p className="mb-5 text-green-600 bi bi-check-circle text-7xl"></p>
        <p>
          Thank you{" "}
          {data.user.name.charAt(0).toUpperCase() + data.user.name.slice(1)} for
          the order!
        </p>
        <p>Your Order ID: {data.id} </p>
      </div>
      <div className="my-5">
        <p>Your order is confirmed.</p>
        <p>Please check your mail ({data.user.email}) for the eBook.</p>
        <p className="my-5">Payment ID: xyz_123456789</p>
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
