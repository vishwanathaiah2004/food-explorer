function SortDropdown({ onSort }) {
  return (
    <div className="relative inline-block w-full sm:w-56 mb-6">
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 ml-1">
        Order by
      </label>

      <div className="relative flex items-center group">
        {/* Sort Icon Decoration */}
        <div className="absolute left-3 pointer-events-none text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5h10M11 9h7M11 13h4M3 17l3 3 3-3M6 18V4"/>
          </svg>
        </div>

        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full appearance-none bg-blue-50/50 border border-blue-100 text-gray-700 py-3 pl-10 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer text-sm font-medium hover:bg-white"
        >
          <option value="">Sort By</option>
          <option value="az">Name: A to Z</option>
          <option value="za">Name: Z to A</option>
          <option value="gradeAsc">Grade: Low to High</option>
          <option value="gradeDesc">Grade: High to Low</option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SortDropdown;