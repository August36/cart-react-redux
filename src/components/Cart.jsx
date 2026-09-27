import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.items);

    return (
        <section>
            <h2>Cart</h2>

            {cartItems.map(item => (
                <article key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price} kr.</p>

                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                    </button>

                </article>
            ))}
                    <button onClick={() => dispatch(clearCart())}>
                        Clear cart
                    </button>
        </section>
    );
}

export default Cart;