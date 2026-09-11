import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsProvider, useProductsState } from '../components/ui/products/ProductsState';
import ProductCard from '../components/ui/products/ProductCard';
import ProductStats from '../components/ui/products/ProductsStats';
import { useAuth } from '../context/AuthContext';

function ProductsContent() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const [searchInput, setSearchInput] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const {
    products,
    loading,
    error,
    stats,
    page,
    totalPages,
    setPage,
    applySearch,
    applyCategory,
    removeProduct,
  } = useProductsState();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applySearch(searchInput.trim());
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await removeProduct(id);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      
      <div className="flex items-center justify-between rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark p-4 sm:p-6 shadow-sm border border-brand-200/60 dark:border-brand-900/40">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900/50 text-brand-900 dark:text-brand-100">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-brand-700/80 dark:text-brand-300 uppercase">
              PRODUCT DASHBOARD
            </p>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-900 dark:text-brand-50">
              Products
            </h1>
          </div>
        </div>

        <Link
          to="/add-product"
          className="flex items-center gap-2 rounded-xl bg-brand-900 dark:bg-brand-50 text-surface-cardLight dark:text-brand-900 px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition-all"
        >
          <span>+</span>
          <span>Add Product</span>
        </Link>
      </div>

      <ProductStats stats={stats} />

      <div className="rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark border border-brand-200/60 dark:border-brand-900/40 p-3.5 sm:p-4 shadow-sm">
        <form onSubmit={handleSearchSubmit} className="flex gap-2 sm:gap-3">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search products..."
            className="flex-1 rounded-xl border border-brand-200/60 dark:border-brand-900/50 bg-surface-light/60 dark:bg-brand-950/30 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-brand-900 dark:text-brand-50 placeholder-[#666666] dark:placeholder-brand-300 outline-none focus:border-brand-500"
          />
          
          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="rounded-xl border border-brand-200/60 dark:border-brand-900/50 bg-surface-light/60 dark:bg-brand-950/30 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-brand-900 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors"
          >
            Filters
          </button>

          <button
            type="submit"
            className="rounded-xl bg-brand-900 dark:bg-brand-50 text-surface-cardLight dark:text-brand-900 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </form>

        {filtersOpen && (
          <div className="mt-3 pt-3 border-t border-brand-200/60 dark:border-brand-900/40 flex gap-3">
            <select
              onChange={(e) => applyCategory(e.target.value)}
              className="rounded-xl border border-brand-200/60 dark:border-brand-900/50 bg-surface-light/60 dark:bg-brand-950/30 p-2 text-xs text-brand-900 dark:text-brand-300 outline-none"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        )}
      </div>

      {/* Statuses */}
      {loading && <p className="text-xs sm:text-sm text-[#666666] dark:text-brand-300">Loading products...</p>}
      {error && <p className="text-xs sm:text-sm text-rose-500">{error}</p>}

      {/* 4. Products Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 pt-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark px-4 py-2 text-xs font-semibold text-brand-900 dark:text-brand-300 disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-xs font-semibold text-[#666666] dark:text-brand-300">
            {page} / {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark px-4 py-2 text-xs font-semibold text-brand-900 dark:text-brand-300 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

    </div>
  );
}

export default function Products() {
  return (
    <ProductsProvider>
      <ProductsContent />
    </ProductsProvider>
  );
}