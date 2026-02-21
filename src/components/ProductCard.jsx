import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const grade = product.nutrition_grades?.toLowerCase() || "n/a";
  const { addToCart } = useCart();

  // Dynamic color for nutrition grades
  const gradeColors = {
    a: "bg-green-500",
    b: "bg-lime-500",
    c: "bg-yellow-500",
    d: "bg-orange-500",
    e: "bg-red-500",
    "n/a": "bg-gray-400"
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image_front_url || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={product.product_name}
          className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Nutri-Grade Badge */}
        <div className={`absolute top-3 right-3 ${gradeColors[grade] || "bg-gray-400"} text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm uppercase`}>
          Grade {grade}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 truncate">
          {product.categories?.split(',')[0] || "General Food"}
        </p>

        <h2 className="font-bold text-gray-800 text-lg leading-tight h-12 line-clamp-2">
          {product.product_name || "Untitled Product"}
        </h2>

        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
          <Link
            to={`/product/${product.code}`}
            className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link"
          >
            View Details
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-3 py-1 mt-2 rounded cursor-pointer" >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;