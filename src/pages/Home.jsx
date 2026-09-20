import { useEffect, useMemo, useState } from "react";
import { getAllProducts } from "../api/products.api";
import HeroSection from "../components/ui/Home/HeroSection";
import CategorySection from "../components/ui/Home/CategorySection";
import FeaturedProducts from "../components/ui/Home/FeaturedProducts";
import { toast } from "react-toastify";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();

        console.log("PRODUCTS:", response.data);

        setProducts(response.data.products || []);
      } catch (error) {
                console.error("Failed to fetch products:", error);
                toast.error("Failed to load products");}
       finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  return (
    <>
      <HeroSection />

      <CategorySection categories={categories} />

      <FeaturedProducts
        products={products}
        loading={loading}
      />
    </>
  );
}

export default Home;