import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./views/Cart";
import Shop from "./views/Shop";
import Home from "./views/Home";
import './App.css'

function App() {


  return (
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
