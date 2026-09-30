import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { getProducts } from "../api/products";

function Shop() {

    //products = aktuel værdi af state
    //setProducts = funktion til at opdatere state
    //useState = hook til at oprette state i en funktionel komponent
    const [products, setProducts] = useState([]);

    //useEffect = hook til at udføre sideeffekter i en funktionel komponent
    //henter produkter fra API'et når komponenten mountes
    //den tomme array som andet argument betyder, at useEffect kun kører én gang, når komponenten mountes
    //getProducts() = funktion der henter produkter fra API'et - hentet fra src/api/products.js
    //setProducts(products) = opdaterer state med de hentede produkter
    //then() = metode der kører når getProducts() er færdig med at hente produkter
    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    //useDispatch = hook der returnerer dispatch-funktionen fra Redux store
    //dispatch = funktion der bruges til at sende actions til Redux store
    const dispatch = useDispatch();

    return (
    <section>
        <h1 className="text-2xl font-bold m-4">Shop</h1>
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map(product => {
                return (
                    <article className="border border-gray-300 rounded-lg p-4" key={product.id}>
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <p className="text-lg">${product.price.toFixed(2)} kr.</p>
                    <img src={product.thumbnail} alt={product.title} className="w-full h-auto mb-4" />
                    <button onClick={() => dispatch(addToCart(product))}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Add to cart
                    </button>
                    </article>
            )})}
        </div>
        </section>
    )
}

export default Shop