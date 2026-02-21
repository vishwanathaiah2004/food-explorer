import { useEffect, useState } from "react";
import {
    fetchProductsByCategory,
    searchProductsByName,
} from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import CategoryFilter from "../components/CategoryFilter";
import BarcodeSearch from "../components/BarcodeSearch";



function Home() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("snacks");
    const [hasMore, setHasMore] = useState(true);



    useEffect(() => {
        loadProducts();
    }, [page, category]);


    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await fetchProductsByCategory(category, page);

            if (data.length === 0) {
                setHasMore(false);
                return;
            }

            if (page === 1) {
                setProducts(data);
            } else {
                setProducts((prev) => [...prev, ...data]);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    const handleCategorySelect = (selected) => {
        setCategory(selected);
        setPage(1);
        setProducts([]);
    };


    const handleSearch = async (query) => {
        const data = await searchProductsByName(query);
        setProducts(data);
    };

    const handleSort = (type) => {
        let sorted = [...products];

        if (type === "az") {
            sorted.sort((a, b) =>
                (a.product_name || "").localeCompare(b.product_name || "")
            );
        }

        if (type === "za") {
            sorted.sort((a, b) =>
                (b.product_name || "").localeCompare(a.product_name || "")
            );
        }

        if (type === "gradeAsc") {
            const order = { a: 1, b: 2, c: 3, d: 4, e: 5 };
            sorted.sort(
                (a, b) =>
                    (order[a.nutrition_grades] || 6) -
                    (order[b.nutrition_grades] || 6)
            );
        }

        if (type === "gradeDesc") {
            const order = { a: 1, b: 2, c: 3, d: 4, e: 5 };
            sorted.sort(
                (a, b) =>
                    (order[b.nutrition_grades] || 6) -
                    (order[a.nutrition_grades] || 6)
            );
        }

        setProducts(sorted);
    };

    return (
        <div className="p-6">
            <CategoryFilter onSelectCategory={handleCategorySelect} />
            <SearchBar onSearch={handleSearch} />
            <BarcodeSearch />
            <SortDropdown onSort={handleSort} />

            {loading && (
                <div className="text-center my-4">
                    <p className="animate-pulse">Loading products...</p>
                </div>
            )}


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={product.code} product={product} />
                ))}
            </div>
            {!loading && products.length === 0 && (
                <p className="text-center mt-4">No products found.</p>
            )}


            <div className="text-center mt-6">
                {hasMore && (
                    <div className="text-center mt-6">

                        <button
                            onClick={() => setPage(page + 1)}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Load More
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Home;
