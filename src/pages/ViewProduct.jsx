import NameCard from "../components/ui/viewProduct/NameCard";
import DetailsCard from '../components/ui/viewProduct/DetailsCard';
import CategoryCard from '../components/ui/viewProduct/CategoryCard';
import HighlightsCard from '../components/ui/viewProduct/HighlightsCard';
import TagsCard from "../components/ui/viewProduct/TagsCard";
import ProductGallery from '../components/ui/viewProduct/ProductGallery';
import Image1 from '../images/images.jpg';
import Image2 from '../images/hero-bg.webp';
import { useEffect, useState } from "react";
import { getSingleproduct } from "../api/products.api";


const ViewProduct = () => {
    let [data, setData] = useState({})
    useEffect(() => {
        (
            async () => {
                try {
                    let res = await getSingleproduct('6aa175bfb35bfb91ee8c77c8');
                    let response = res.data
                    setData(response)
                    console.log(response)
                }
                catch (error) {
                    console.log(error)
                }
            }
        )()
    }, []);

    console.log(data)

    const productData = {
        title: `${data?.product?.name?data.product.name:"Product Name"}`,
        discount: `$${data?.product?.discountPrice?data.product.discountPrice:"Discount"}`,
        description: `${data?.product?.description?data.product.description:"Description"}`,
        price: `$${data?.product?.price?data.product.price:"price"}`,
        stock: `${data?.product?.stock?data.product.stock:"stock"}`,
        sku: `${data?.product?.sku?data.product.sku:"sku"}`,
        category: `${data?.product?.category?data.product.category:"category"}`,
        subcategory: `${data?.product?.subcategory?data.product.subcategory:"subcategory"}`,
        brand: `${data?.product?.brand?data.product.brand:"brand"}`,
        tags: ['bmw', 'm5cs', 'sports', 'yellow'],
        highlights: `${data?.product?.shortDescription?data.product.shortDescription:"shortDescription"}`,
        images: [Image1, Image2]
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
                {/* Left Side */}
                <div className="grid h-fit grid-cols-1 gap-4 self-start">
                    <NameCard
                        title={productData.title}
                        description={productData.description}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <DetailsCard
                            title="Price"
                            cardData={productData.price}
                        />
                        <DetailsCard
                            title="Discount"
                            cardData={productData.discount}
                        />
                        <DetailsCard
                            title="Stock"
                            cardData={productData.stock}
                        />
                        <DetailsCard
                            title="SKU"
                            cardData={productData.sku}
                        />
                    </div>

                    <CategoryCard
                        CategoryInfo={productData.category}
                        SubcategoryInfo={productData.subcategory}
                        Brand={productData.brand}
                    />
                    <TagsCard
                        tags={productData.tags}
                    />

                    <HighlightsCard
                        highlights={productData.highlights}
                    />

                </div>

                {/* Right Side */}
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