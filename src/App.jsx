import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./views/Cart";
import Shop from "./views/Shop";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import PhoneInfo from "./components/PhoneInfo";
import "./App.css";

function App() {
    const cart = useSelector(state => state.cart.items);

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/shop" element={<Shop />}>
                    <Route path=":id" element={<PhoneInfo />} />
                </Route>

                <Route path="/checkout" element={cart.length > 0 ? <Checkout /> : <Shop />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;