import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./views/Cart";
import Shop from "./views/Shop";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import PhoneInfo from "./components/PhoneInfo";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/shop" element={<Shop />}>
                    <Route path=":id" element={<PhoneInfo />} />
                </Route>

                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;