import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-linear-to-r from-blue-700 to-blue-900 shadow-lg border-b border-blue-400/20 sticky top-0 z-50 justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center group">
            <Link
              to="/"
              className="text-white text-2xl font-extrabold tracking-tight hover:text-blue-200 
              transition-colors duration-300"
            >
              <span className="bg-white text-blue-800 px-2 py-1 rounded-md mr-1 shadow-sm">Food</span>
              Explorer
            </Link>


          </div>
          <Link to="/cart" className="ml-auto text-white bg-green-400 rounded-2xl text-2xl font-extrabold tracking-tight
           hover:text-blue-200 transition-colors duration-300  ">
            Cart ({cartItems.length})
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-blue-100 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;