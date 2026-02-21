import { useState } from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
         
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto p-2">

                <div className="group flex items-center w-full bg-white border border-gray-200
                 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 h-12 rounded-xl
                  overflow-hidden transition-all duration-200 shadow-sm">
                    <div className="pl-4">
                        <svg
                            className="text-gray-400 group-focus-within:text-blue-500 transition-colors"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20"
                            viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>

                    <input
                        type="text"
                        placeholder="Search for delicious food..."
                        className="w-full h-full px-3 outline-none text-gray-700 placeholder-gray-400 text-base "
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full sm:w-32 h-12 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-xl
                     shadow-md shadow-blue-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                    <span>Search</span>
                    <span className="sm:hidden text-lg">→</span>
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
