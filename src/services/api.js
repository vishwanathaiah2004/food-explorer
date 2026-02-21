import axios from "axios";

const BASE_URL = "https://world.openfoodfacts.org";

export const fetchProductsByCategory = async (category, page = 1) => {
  const res = await axios.get(
    `${BASE_URL}/category/${category}.json?page=${page}`
  );
  return res.data.products;
};

export const searchProductsByName = async (query) => {
  const res = await axios.get(
    `${BASE_URL}/cgi/search.pl?search_terms=${query}&json=true`
  );
  return res.data.products;
};

export const fetchProductByBarcode = async (barcode) => {
  const res = await axios.get(
    `${BASE_URL}/api/v0/product/${barcode}.json`
  );
  return res.data.product;
};

export const fetchCategories = async () => {
  const res = await axios.get(
    `${BASE_URL}/categories.json`
  );
  return res.data.tags.slice(0, 20); 
};

