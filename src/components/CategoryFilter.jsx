import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";

function CategoryFilter({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadCategories();
  }, []);

  return (
   <div className="relative inline-block w-full sm:w-64 mb-6">
  {/* Label for accessibility (Optional but recommended) */}
  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
    Filter by
  </label>
  
  <div className="relative flex items-center">
    <select
      onChange={(e) => onSelectCategory(e.target.value)}
      className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-xl 
      shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer 
      text-sm font-medium"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id} className="py-2">
          {cat.name}
        </option>
      ))}
    </select>

    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-600">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </div>
</div>
  );
}

export default CategoryFilter;
