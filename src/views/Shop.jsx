import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { setProducts } from "../store/productsSlice";
import { getProducts } from "../api/products";
import { Link, Outlet } from "react-router-dom";

function Shop() {
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then((products) => {
            dispatch(setProducts(products));
        });
    }, [dispatch]);

    return (
        <section>
            <h1 className="text-2xl font-bold m-4">Shop</h1>

            <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
                {products.map(product => (
                    <article
                        key={product.id}
                        className="border border-gray-300 rounded-lg p-4"
                    >
                        <Link to={`/shop/${product.id}`}>
                            <h2 className="text-xl font-bold mb-2">
                                {product.title}
                            </h2>

                            <p className="text-lg">
                                ${product.price.toFixed(2)} kr.
                            </p>

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-auto mb-4"
                            />
                        </Link>

                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Add to cart
                        </button>
                    </article>
                ))}
            </div>

            <Outlet />
        </section>
    );
}

export default Shop;