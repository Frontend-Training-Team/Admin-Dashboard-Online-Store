import { useState } from "react";
import { ProductsProvider, useProductsState } from "../components/ui/products/ProductsState";
import ProductCard from "../components/ui/products/ProductCard";
import ProductsSkeleton from "../components/ui/skeletons/ProductsSkeleton";
import ProductsStats from "../components/ui/products/ProductsStats";
import { useNavigate } from "react-router-dom";
import QuickEditModal from "../components/ui/products/QuickEditModal";
import DeleteProductModal from "../components/ui/products/DeleteProductModal";
import { patchUpdateProductAdmin } from "../api/products.api";
import toast from "react-hot-toast";
import { Funnel, Package, Plus, Search, SearchX } from "lucide-react";

const STATUS_OPTIONS = [
  { key: "all", label: "Total" },
  { key: "inStock", label: "In Stock" },
  { key: "outOfStock", label: "Out of Stock" },
  { key: "featured", label: "Featured" },
];

const ProductsContent = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [quickEditProduct, setQuickEditProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const handleConfirmDelete = async () => {
    if (!deletingProduct) return;
    try {
      setIsDeleting(true);
      const productId = deletingProduct._id || deletingProduct.id;
      await removeProduct(productId);
      toast.success(`Product "${deletingProduct.name || deletingProduct.title || ''}" deleted successfully`);
      setDeletingProduct(null);
    } catch (err) {
      console.error("Failed to delete product:", err);
      toast.error(err.response?.data?.message || err.userMessage || "Failed to delete product");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <div>
      {/* Header Banner */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50 to-white p-6 shadow-xs dark:border-[rgba(255,255,255,0.06)] dark:from-[#12141A] dark:to-[#181B22]">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-[#181B22] dark:text-[#C98156]">
            <Package size={24} />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-500 dark:text-[#C98156]">
              Product Dashboard
            </p>
            <h1 className="text-2xl font-bold text-brand-900 dark:text-[#F5F1EA]">
              Products
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/products/new")}
          className="flex items-center gap-2 rounded-xl bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-brand-800 active:scale-95 dark:bg-[#C98156] dark:hover:bg-[#A8653F] dark:text-[#14100C] cursor-pointer"
        >
          <Plus size={18} />
          <span>Add Product</span>
        </button>
      </div>

      {/* 4 Stats Cards */}
      <ProductsStats stats={stats} />

      {/* Search & Filters */}
      <div className="mb-4 rounded-2xl border border-brand-200/60 bg-white p-4 shadow-xs dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A]">
        <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-[240px] flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-400 dark:text-[#8A8378]"
            />
            <input
              type="text"
              value={searchInput}
              placeholder="Search products..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full rounded-xl border border-brand-200/60 bg-white py-2.5 pl-10 pr-4 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none dark:border-[#262B34] dark:bg-[#1F232B] dark:text-[#F5F1EA] dark:placeholder-[#5C574F] dark:focus:border-[#C98156]"
            />
          </div>

          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-xl border border-brand-200/60 bg-white px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-50 active:scale-95 transition-all dark:border-[#262B34] dark:bg-[#181B22] dark:text-[#B9B2A8] dark:hover:bg-[#22262F] cursor-pointer"
          >
            <Funnel size={16} />
            <span>Filters</span>
          </button>

          <button
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 active:scale-95 transition-all dark:bg-[#C98156] dark:hover:bg-[#A8653F] dark:text-[#14100C] cursor-pointer"
          >
            <Search size={16} />
            <span>Search</span>
          </button>
        </form>

        {filtersOpen && (
          <div className="mt-4 grid grid-cols-1 gap-4 border-t border-brand-200/60 pt-4 sm:grid-cols-2 dark:border-[rgba(255,255,255,0.06)]">
            <div>
              <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-brand-500 dark:text-[#8A8378]">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => applyCategory(e.target.value)}
                className="w-full rounded-xl border border-brand-200/60 bg-white px-4 py-2.5 text-sm text-brand-700 dark:border-[#262B34] dark:bg-[#1F232B] dark:text-[#F5F1EA]"
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
              <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-brand-500 dark:text-[#8A8378]">
                Subcategory
              </label>
              <input
                type="text"
                value={subcategory}
                onChange={(e) => applySubcategory(e.target.value)}
                placeholder="e.g. smartphones"
                className="w-full rounded-xl border border-brand-200/60 bg-white px-4 py-2.5 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none dark:border-[#262B34] dark:bg-[#1F232B] dark:text-[#F5F1EA] dark:placeholder-[#5C574F] dark:focus:border-[#C98156]"
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
            type="button"
            onClick={() => applyStatus(opt.key)}
            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              status === opt.key
                ? "bg-brand-900 text-white dark:bg-[#2A1B12] dark:text-[#F0CDAF] dark:border dark:border-[#C98156]"
                : "bg-brand-100/70 text-brand-700 hover:bg-brand-100 dark:bg-[#181B22] dark:text-[#8A8378] dark:hover:bg-[#22262F] dark:hover:text-[#F5F1EA]"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && <p className="mb-4 text-sm text-rose-500 dark:text-[#F87171]">{error}</p>}

      {/* Empty State */}
      {!loading && !error && products.length === 0 && (
        <div className="rounded-2xl border border-brand-200/60 bg-white p-12 text-center shadow-xs dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A]">
          <div className="mx-auto flex max-w-sm flex-col items-center justify-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-[#181B22] dark:text-[#C98156]">
              <SearchX size={30} />
            </div>
            <h4 className="text-lg font-bold text-brand-900 dark:text-[#F5F1EA]">
              No matching products found
            </h4>
            <p className="mt-1 text-xs text-brand-500 dark:text-[#8A8378]">
              {searchInput
                ? `No products matched "${searchInput}". Try adjusting your filters or keywords.`
                : "There are currently no products available."}
            </p>
          </div>
        </div>
      )}

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onView={(p) => navigate(`/products/view/${p._id || p.id}`)}
            onQuickEdit={(p) => setQuickEditProduct(p)}
            onEdit={(p) => navigate(`/products/${p._id || p.id}/edit`)}
            onDelete={(p) => setDeletingProduct(p)}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-xl border border-brand-200/60 bg-white px-4 py-2 text-xs font-medium text-brand-700 transition-all hover:bg-brand-50 disabled:opacity-40 dark:border-[#262B34] dark:bg-[#181B22] dark:text-[#B9B2A8] dark:hover:bg-[#22262F] cursor-pointer"
          >
            Prev
          </button>
          <span className="px-3 py-2 text-xs font-medium text-brand-600 dark:text-[#8A8378]">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-xl border border-brand-200/60 bg-white px-4 py-2 text-xs font-medium text-brand-700 transition-all hover:bg-brand-50 disabled:opacity-40 dark:border-[#262B34] dark:bg-[#181B22] dark:text-[#B9B2A8] dark:hover:bg-[#22262F] cursor-pointer"
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

      {/* Delete Product Modal */}
      <DeleteProductModal
        isOpen={Boolean(deletingProduct)}
        product={deletingProduct}
        onClose={() => setDeletingProduct(null)}
        onConfirm={handleConfirmDelete}
        loading={isDeleting}
      />
    </div>
  );
};

const Products = () => (
  <ProductsProvider>
    <ProductsContent />
  </ProductsProvider>
);

export default Products;
