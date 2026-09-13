import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";

import NameCard from "../components/ui/viewProduct/NameCard";
import DetailsCard from '../components/ui/viewProduct/DetailsCard';
import CategoryCard from '../components/ui/viewProduct/CategoryCard';
import HighlightsCard from '../components/ui/viewProduct/HighlightsCard';
import TagsCard from "../components/ui/viewProduct/TagsCard";
import ProductGallery from '../components/ui/viewProduct/ProductGallery';
import Image1 from '../assets/images/hero-bg.webp';
import { getSingleproduct } from "../api/products.api";

const ViewProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await getSingleproduct(id);
                setProduct(res.data?.product || res.data);
            } catch (err) {
                console.error("Error fetching product:", err);
                setError(err.userMessage || "Failed to load product details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-96 items-center justify-center gap-2 text-[#C98156]">
                <Loader2 size={24} className="animate-spin" />
                <span className="text-sm font-medium text-brand-900 dark:text-[#F5F1EA]">Loading product details...</span>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="p-8 text-center rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-white dark:bg-[#12141A]">
                <p className="text-rose-500 font-medium mb-4">{error || "Product not found."}</p>
                <button
                    onClick={() => navigate("/products")}
                    className="px-4 py-2 bg-[#C98156] hover:bg-[#b06f47] text-white rounded-xl text-sm font-medium transition cursor-pointer"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    const defaultImages = [{ url: Image1 }];
    const productImages = product.images && product.images.length > 0 ? product.images : defaultImages;

    const productData = {
        title: product.name || "Product Name",
        discount: product.discountPrice ? `$${product.discountPrice}` : "No Discount",
        description: product.description || "No description provided",
        price: `$${product.price ?? 0}`,
        stock: `${product.stock ?? 0}`,
        sku: product.sku || "N/A",
        category: product.category || "Uncategorized",
        subcategory: product.subcategory || "None",
        brand: product.brand || "Generic",
        highlights: product.shortDescription || "No highlights available",
        tags: product.tags || [],
        images: productImages
    };

    return (
        <div className="space-y-6">
            {/* زر الرجوع للخلف */}
            <button
                type="button"
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-900 dark:text-[#8A8378] dark:hover:text-[#F5F1EA] transition-colors cursor-pointer w-fit"
            >
                <ArrowLeft size={18} />
                <span>Back to Products</span>
            </button>

            <div className="grid grid-cols-1 items-start lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-white dark:bg-[#12141A] shadow-xs">
                {/* Left Side */}
                <div className="grid h-fit grid-cols-1 gap-4 self-start lg:col-span-7">
                    <NameCard
                        title={productData.title}
                        description={productData.description}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <DetailsCard title="Price" cardData={productData.price} />
                        <DetailsCard title="Discount" cardData={productData.discount} />
                        <DetailsCard title="Stock" cardData={productData.stock} />
                        <DetailsCard title="SKU" cardData={productData.sku} />
                    </div>

                    <CategoryCard
                        CategoryInfo={productData.category}
                        SubcategoryInfo={productData.subcategory}
                        Brand={productData.brand}
                    />

                    {productData.tags.length > 0 && (
                        <TagsCard tags={productData.tags} />
                    )}

                    <HighlightsCard highlights={productData.highlights} />
                </div>

                {/* Right Side - Gallery */}
                <div className="p-0 lg:col-span-5 h-full">
                    <ProductGallery
                        images={productData.images}
                        productName={productData.title}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
