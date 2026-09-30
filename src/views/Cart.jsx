import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    
                {cartItems.map(item => (
                    <article key={item.id} className="border border-gray-300 rounded-lg p-4 mb-4">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-lg">${item.price.toFixed(2)} kr.</p>
                        <img src={item.thumbnail} alt={item.title} className="w-xs h-auto mb-4" />
    
                        <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-gray-500 text-white py-1 px-2 mt-2 rounded hover:bg-red-600">
                            Remove
                        </button>
                    </article>
                ))}
</div>
                    <button onClick={() => dispatch(clearCart())} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Clear cart
                    </button>
        </section>
    );
}

export default Cart;