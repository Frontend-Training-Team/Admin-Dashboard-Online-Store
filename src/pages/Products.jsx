import { useState } from "react";
import { ProductsProvider, useProductsState } from "../components/ui/products/ProductsState";
import ProductCard from "../components/ui/products/ProductCard";
import ProductsStats from "../components/ui/products/ProductsStats";
import { useAuth } from "../context/AuthContext";

const STATUS_OPTIONS = [
  { key: "all", label: "Total" },
  { key: "inStock", label: "In Stock" },
  { key: "outOfStock", label: "Out of Stock" },
  { key: "featured", label: "Featured" },
];

const ProductsContent = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [searchInput, setSearchInput] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const {
    products,
    loading,
    error,
    stats,
    page,
    totalPages,
    setPage,
    status,
    category,
    subcategory,
    applySearch,
    applyCategory,
    applySubcategory,
    applyStatus,
    removeProduct,
  } = useProductsState();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applySearch(searchInput.trim());
  };

  const handleDelete = async (id) => {
    if (window.confirm("متأكد إنك عايز تمسح المنتج ده؟")) {
      await removeProduct(id);
    }
  };

  return (
    <div>
      {/* Header banner — دلوقتي فيه Tint خفيف بلون البراند بدل الأبيض العادي */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50 to-white p-6 dark:border-brand-900/40 dark:from-brand-900/20 dark:to-surface-dark">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            📦
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-500">
              Product Dashboard
            </p>
            <h1 className="text-2xl font-bold text-brand-900 dark:text-brand-50">
              Products
            </h1>
          </div>
        </div>

        {isAdmin && (
          <button
            onClick={() => {
              /* افتح modal / روح لصفحة Add Product */
            }}
            className="flex items-center gap-1.5 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-800 dark:bg-brand-700 dark:hover:bg-brand-600"
          >
            <span>+</span>
            <span>Add Product</span>
          </button>
        )}
      </div>

      {/* Stats */}
      <ProductsStats stats={stats} />

      {/* Search bar */}
      <div className="mb-4 rounded-2xl border border-brand-200/60 bg-white p-4 dark:border-brand-900/40 dark:bg-surface-dark">
        <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-[240px] flex-1">
            {/* أيقونة العدسة جوه الصندوق */}
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-brand-200/60 bg-white py-2 pl-9 pr-3 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none dark:border-brand-900/40 dark:bg-surface-dark dark:text-brand-50"
            />
          </div>

          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-full border border-brand-200/60 bg-white px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50 dark:border-brand-900/40 dark:bg-surface-dark dark:text-brand-300 dark:hover:bg-brand-900/30"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M10 12h4" />
            </svg>
            Filters
          </button>

          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-full bg-brand-900 px-5 py-2 text-sm font-medium text-white hover:bg-brand-800 dark:bg-brand-700 dark:hover:bg-brand-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            Search
          </button>
        </form>

        {/* Category / Subcategory — بنفس عرض Koda، وبتظهر لما تدوس Filters بس */}
        {filtersOpen && (
          <div className="mt-4 grid grid-cols-1 gap-4 border-t border-brand-200/60 pt-4 sm:grid-cols-2 dark:border-brand-900/40">
            <div>
              <label className="mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-brand-500">
                📁 Category
              </label>
              <select
                value={category}
                onChange={(e) => applyCategory(e.target.value)}
                className="w-full rounded-full border border-brand-200/60 bg-white px-4 py-2 text-sm text-brand-700 dark:border-brand-900/40 dark:bg-surface-dark dark:text-brand-300"
              >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="phones">Phones</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="beauty">Beauty</option>
                <option value="sports">Sports</option>
              </select>
            </div>

            <div>
              <label className="mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-brand-500">
                🏷️ Subcategory
              </label>
              <input
                type="text"
                value={subcategory}
                onChange={(e) => applySubcategory(e.target.value)}
                placeholder="e.g. smartphones"
                className="w-full rounded-full border border-brand-200/60 bg-white px-4 py-2 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none dark:border-brand-900/40 dark:bg-surface-dark dark:text-brand-50"
              />
            </div>
          </div>
        )}
      </div>

      {/* Status pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            onClick={() => applyStatus(opt.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              status === opt.key
                ? "bg-brand-900 text-white dark:bg-brand-800"
                : "bg-brand-100/70 text-brand-700 hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-900/50"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading && <p className="text-sm text-brand-500">Loading products...</p>}
      {error && <p className="text-sm text-rose-500">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p className="text-sm text-brand-500">مفيش منتجات مطابقة لبحثك.</p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            isAdmin={isAdmin}
            onView={(p) => console.log("view", p._id)}
            onQuickEdit={(p) => console.log("quick edit", p._id)}
            onEdit={(p) => console.log("edit", p._id)}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-md border border-brand-200/60 px-3 py-1.5 text-xs text-brand-700 disabled:opacity-40 dark:border-brand-900/40 dark:text-brand-300"
          >
            Prev
          </button>
          <span className="px-2 py-1.5 text-xs text-brand-500">
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-md border border-brand-200/60 px-3 py-1.5 text-xs text-brand-700 disabled:opacity-40 dark:border-brand-900/40 dark:text-brand-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const Products = () => (
  <ProductsProvider>
    <ProductsContent />
  </ProductsProvider>
);

export default Products;
