import { Link } from "react-router-dom";

function Home() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <img src="" alt="" />
        <p className="text-lg text-gray-700 mb-4">This is a Smartphone shop</p>
        <Link to="/shop" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Products</Link>
    </div>
);
}

export default Home