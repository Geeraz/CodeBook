import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components";
import { useCart } from "../context";
import { toast } from "react-toastify";
import { getProuct } from "../services";

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useTitle(product.name);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProuct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl font-bold text-center text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="px-3 py-1 mr-2 font-semibold border rounded-lg text-amber-500 bg-amber-50">
                  BEST SELLER
                </span>
              )}
              {product.in_stock && (
                <span className="px-3 py-1 mr-2 font-semibold border rounded-lg text-emerald-600 bg-slate-100">
                  INSTOCK
                </span>
              )}
              {!product.in_stock && (
                <span className="px-3 py-1 mr-2 font-semibold border rounded-lg text-rose-700 bg-slate-100">
                  OUT OF STOCK
                </span>
              )}
              <span className="px-3 py-1 mr-2 font-semibold text-blue-500 border rounded-lg bg-slate-100">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {!inCart ? (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
