import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex flex-wrap justify-between max-w-4xl p-2 m-auto mb-5 border-b dark:border-slate-700 ">
      <div className="flex">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-32 rounded"
            src={product.poster}
            alt={product.name}
          />
        </Link>
        <div className="">
          <Link to={`/products/${product.id}`}>
            <p className="ml-2 text-lg dark:text-slate-200">
              The Complete Guide to Backend Development
            </p>
          </Link>
          <button
            onClick={() => removeFromCart(product)}
            className="ml-2 text-base text-red-400"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="m-2 text-lg dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  );
};
