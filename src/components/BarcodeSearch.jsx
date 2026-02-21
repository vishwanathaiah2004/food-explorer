import { useState } from "react";
import { fetchProductByBarcode } from "../services/api";
import { useNavigate } from "react-router-dom";

function BarcodeSearch() {
  const [barcode, setBarcode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const product = await fetchProductByBarcode(barcode);

      if (product && product.code) {
        navigate(`/product/${barcode}`);
      } else {
        setError("Product not found.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Search by barcode..."
          className="border p-2 w-full rounded-2xl"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
        />
        <button className="bg-purple-500 text-white px-4 rounded-2xl cursor-pointer">
          Search
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}

export default BarcodeSearch;
