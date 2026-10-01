import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sellPhone, buyPhone } from "../store/profitSlice";


function Home() {
    const profit = useSelector(state => state.profit.amount);
    const dispatch = useDispatch();

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg text-gray-700 mb-4">This is a Smartphone shop</p>
        <div className="flex gap-4 mb-4">
            <button onClick={() => dispatch(sellPhone())} className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded">Sell iPhone</button>
            <button onClick={() => dispatch(buyPhone())} className="bg-blue-800 hover:bg-blue-500 text-white py-2 px-4 rounded">Buy iPhone</button>
        </div>
        <p className="text-xl font-bold mb-4">Profit: ${profit.toFixed(2)}</p>
        <Link to="/shop" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Products</Link>
    </div>
);
}

export default Home