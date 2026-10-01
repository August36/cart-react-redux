import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#e2dbdb',
  textDecoration: 'none',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Navbar() {
    const cart = useSelector(state => state.cart.items);
    return (
        <nav className="bg-gray-800 p-4 flex justify-between">
            <NavLink to="/" style={navLinkStyles}>Home</NavLink>
            <div className="flex gap-4">
                <NavLink to="/shop" style={navLinkStyles}>Shop</NavLink>
                <NavLink to="/cart" style={navLinkStyles}>Cart ({ cart.length })</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;