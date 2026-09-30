import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function PhoneInfo() {
    const { id } = useParams();

    const products = useSelector(state => state.products.items);

    const phone = products.find(
        product => product.id === Number(id)
    );

    if (!phone) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">

                <h2 className="text-2xl font-bold mb-4">
                    {phone.title}
                </h2>

                <img
                    src={phone.thumbnail}
                    alt={phone.title}
                    className="w-full mb-4"
                />

                <p className="text-gray-600 mb-4">
                    {phone.description}
                </p>

                <p className="text-lg font-bold mb-4">
                    ${phone.price.toFixed(2)} kr.
                </p>

                <Link
                    to="/shop"
                    className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                    Close
                </Link>

            </div>
        </div>
    );
}

export default PhoneInfo;