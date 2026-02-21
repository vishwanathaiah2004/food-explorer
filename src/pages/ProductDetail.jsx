import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductByBarcode } from "../services/api";

function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductByBarcode(barcode);
      setProduct(data);
    };
    loadProduct();
  }, [barcode]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <img
        src={product.image_front_url}
        alt={product.product_name}
        className="h-60"
      />

      <h1 className="text-2xl font-bold mt-4">
        {product.product_name}
      </h1>

      <p className="mt-2">
        {product.ingredients_text || "No Ingredients Info"}
      </p>

      <div className="mt-4">
        <p>Energy: {product.nutriments?.energy_kcal} kcal</p>
        <p>Fat: {product.nutriments?.fat} g</p>
        <p>Carbs: {product.nutriments?.carbohydrates} g</p>
        <p>Proteins: {product.nutriments?.proteins} g</p>
      </div>
    </div>
  );
}

export default ProductDetail;
