import { useState } from "react";
import { ProductsProvider, useProductsState } from "../components/ui/products/ProductsState";
import ProductCard from "../components/ui/products/ProductCard";
import ProductsStats from "../components/ui/products/ProductsStats";
// import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import QuickEditModal from "../components/ui/products/QuickEditModal";
import { patchUpdateProductAdmin } from "../api/products.api";
import toast from "react-hot-toast";
import { Funnel, Package, Plus, Search, SearchX, Users } from "lucide-react";

const STATUS_OPTIONS = [
  { key: "all", label: "Total" },
  { key: "inStock", label: "In Stock" },
  { key: "outOfStock", label: "Out of Stock" },
  { key: "featured", label: "Featured" },
];

const ProductsContent = () => {
  const navigate = useNavigate();
  // const { user } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [quickEditProduct, setQuickEditProduct] = useState(null);

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
    refetch,
  } = useProductsState();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applySearch(searchInput.trim());
  };

  const handleQuickEditSubmit = async (formData) => {
    try {
      const productId = quickEditProduct._id || quickEditProduct.id;
      await patchUpdateProductAdmin(productId, formData);
      toast.success("Product updated successfully!");
      setQuickEditProduct(null);
      refetch();
    } catch (err) {
      console.error("Failed to quick edit product:", err);
      toast.error(err.response?.data?.message || err.userMessage || "Failed to update product");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await removeProduct(id);
    }
  };

  return (
    <div>
      {/* Header banner — دلوقتي فيه Tint خفيف بلون البراند بدل الأبيض العادي */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50 to-white p-6 dark:border-brand-900/40 dark:from-brand-900/20 dark:to-surface-dark">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <Package size={24} />
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


        <button
          onClick={() => {
            navigate("/products/new")
          }}
          className="flex items-center px-4 py-3 gap-1.5 rounded-xl border bg-brand-200/30 hover:bg-brand-200/50 border-brand-200/60
            dark:text-brand-300 dark:hover:bg-brand-900/30 active:scale-90 duration-200
            dark:border-brand-900/40 dark:bg-surface-darkdark:text-brand-300 dark:bg-surface-dark
            "
        >
          <span> <Plus /> </span>
          <span>Add Product</span>
        </button> {/* Add Product */}
      </div>

      {/* Stats */}
      <ProductsStats stats={stats} />

      {/* Search bar */}
      <div className="mb-4 rounded-2xl border border-brand-200/60 bg-white p-4 dark:border-brand-900/40 dark:bg-surface-dark">
        <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-2">
          <div className="relative py-1 flex-1">
            {/* Icon */}
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-400" size={20} />
            <input
              type="text"
              value={searchInput}
              placeholder="Search Products ..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-400 rounded-2xl font-semibold cursor-pointer"
            />
          </div>{/* Search Input */}

          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center px-4 py-3 gap-1.5 rounded-xl border bg-brand-200/30 hover:bg-brand-200/50 border-brand-200/60
            dark:text-brand-300 dark:hover:bg-brand-900/30 active:scale-90 duration-200
            dark:border-brand-900/40 dark:bg-surface-darkdark:text-brand-300 dark:bg-surface-dark
            ">
            <Funnel />
            Filters
          </button>{/* Filters BTN */}

          <button
            type="submit"
            className="flex items-center px-4 py-3 gap-1.5 rounded-xl border bg-black border-brand-200/60
            text-white dark:text-brand-300 dark:hover:bg-brand-900/30 active:scale-90 duration-200
            dark:border-brand-900/40 dark:bg-surface-darkdark:text-brand-300 dark:bg-surface-dark
            ">
            <Search />
            Search
          </button>{/* Search BTN */}
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
            className={`rounded-xl px-3 py-1.5 text-xs sm:text-lg font-medium duration-200 ${status === opt.key
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
        <div className="bg-white rounded-2xl">
          <div colSpan={4} className="px-6 py-16 text-center">
            <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
              <div className="rounded-2xl bg-[#FFEFDD] dark:bg-[#161B26] p-4 text-[#A36037] mb-3">
                {products.length === 0 ? <SearchX size={32} /> : <Users size={32} />}
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                {products.length === 0 ? 'No matching users found' : 'No users available'}
              </h4>
              <p className="mt-1 text-xs text-gray-400 dark:text-[#8E9BAE]">
                {products.length === 0
                  ? `No users matched "${products.length === 0}". Try searching with a different keyword.`
                  : 'There are currently no users in the database.'}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}

            onView={(p) => navigate(`/products/view/${p._id || p.id}`)}
            onQuickEdit={(p) => setQuickEditProduct(p)}
            onEdit={(p) => navigate(`/products/${p._id || p.id}/edit`)}
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

      {/* Quick Edit Modal */}
      {quickEditProduct && (
        <QuickEditModal
          product={quickEditProduct}
          onClose={() => setQuickEditProduct(null)}
          onSubmit={handleQuickEditSubmit}
        />
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
