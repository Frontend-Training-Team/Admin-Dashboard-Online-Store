import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import {
  getAllProducts,
  getSearchProducts,
  deleteProductAdmin as deleteProductAdminApi,
} from "../../../api/products.api"; 

const ProductsContext = createContext(null);

const PAGE_SIZE = 10;

export const ProductsProvider = ({ children }) => {
  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("all"); 

  const hasServerFilters =
    searchQuery.trim() !== "" || category !== "" || subcategory !== "" || sort !== "";

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let res;
      if (hasServerFilters) {
        res = await getSearchProducts({
          params: { search: searchQuery, category, subcategory, sort, page, limit: PAGE_SIZE },
        });
      } else {
        res = await getAllProducts({
          params: { page, limit: PAGE_SIZE },
        });
      }

      const data = res.data; 
      setRawProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
      setTotalProducts(data.totalProducts || 0);
    } catch (err) {
      
      setError(err.userMessage || "Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [searchQuery, category, subcategory, sort, page, hasServerFilters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const products = useMemo(() => {
    if (status === "all") return rawProducts;
    if (status === "inStock") return rawProducts.filter((p) => p.stock > 0);
    if (status === "outOfStock") return rawProducts.filter((p) => p.stock === 0);
    if (status === "featured") return rawProducts.filter((p) => p.tags?.includes("featured"));
    return rawProducts;
  }, [rawProducts, status]);

  const stats = useMemo(
    () => ({
      total: totalProducts,
      inStock: rawProducts.filter((p) => p.stock > 0).length,
      outOfStock: rawProducts.filter((p) => p.stock === 0).length,
      featured: rawProducts.filter((p) => p.tags?.includes("featured")).length,
    }),
    [rawProducts, totalProducts]
  );

  const applySearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };
  const applyCategory = (cat) => {
    setCategory(cat);
    setSubcategory("");
    setPage(1);
  };
  const applySubcategory = (subcat) => {
    setSubcategory(subcat);
    setPage(1);
  };
  const applySort = (s) => {
    setSort(s);
    setPage(1);
  };
  const applyStatus = (s) => setStatus(s);

  const removeProduct = async (productId) => {
    await deleteProductAdminApi(productId);
    setRawProducts((prev) => prev.filter((p) => p._id !== productId));
    setTotalProducts((prev) => Math.max(0, prev - 1));
  };

  const value = {
    products,
    loading,
    error,
    stats,
    page,
    totalPages,
    setPage,
    searchQuery,
    category,
    subcategory,
    sort,
    status,
    applySearch,
    applyCategory,
    applySubcategory,
    applySort,
    applyStatus,
    removeProduct,
    refetch: fetchProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsState = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) {
    throw new Error("useProductsState لازم يتستخدم جوه ProductsProvider");
  }
  return ctx;
};
