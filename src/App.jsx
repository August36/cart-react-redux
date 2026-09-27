import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import './App.css'

function App() {

  const dispatch = useDispatch();

  return (
    <>
    <Navbar />
    <section>
      <h1>Shop</h1>

      {products.map(product => {

          return (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} kr.</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </article>
      )})}
    </section>

    <section>
      <Cart />
    </section>
    </>
  )
}

export default App
