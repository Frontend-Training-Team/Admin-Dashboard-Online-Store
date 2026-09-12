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
                // السيرفر يرجع { success: true, product: { ... } }
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

    // أثناء التحميل
    if (loading) {
        return (
            <div className="flex h-96 items-center justify-center gap-2 text-brand-500">
                <Loader2 size={24} className="animate-spin" />
                <span className="text-sm font-medium">Loading product details...</span>
            </div>
        );
    }

    // لو حدث خطأ أو لم يجد المنتج
    if (error || !product) {
        return (
            <div className="p-8 text-center">
                <p className="text-rose-500 font-medium mb-4">{error || "Product not found."}</p>
                <button
                    onClick={() => navigate("/products")}
                    className="px-4 py-2 bg-brand-900 text-white rounded-xl text-sm"
                >
                    Back to Products
                </button>
            </div>
        );
    }

    // تجهيز الصور البديلة بشكل آمن
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
        <div className="space-y-4">
            {/* زر الرجوع للخلف */}
            <button
                type="button"
                onClick={() => navigate("/products")}
                className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-800 dark:text-brand-300 transition cursor-pointer"
            >
                <ArrowLeft size={18} />
                <span>Back to Products</span>
            </button>

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
                {/* Left Side */}
                <div className="grid h-fit grid-cols-1 gap-4 self-start">
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
                <div className="p-0 lg:pl-6">
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