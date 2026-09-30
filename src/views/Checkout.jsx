import { useSelector } from "react-redux";

function Checkout() {
    const cartItems = useSelector(state => state.cart.items);

    function calculateTotal(cartItems) {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <p className="text-lg">Thanks for your purchase!</p>
            <p className="text-lg">Total: ${calculateTotal(cartItems).toFixed(2)}</p>
        </>
    );
}

export default Checkout;