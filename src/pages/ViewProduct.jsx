import ProductName from "../components/ui/viewProduct/productName";
import ProductDetails from '../components/ui/viewProduct/ProductDetails';
import CategoryInfo from '../components/ui/viewProduct/CategoryInfo';
import Highlights from '../components/ui/viewProduct/Highlights';
import ProductTags from "../components/ui/viewProduct/ProductTags";

const ViewProduct = () => {
  const productData = {
    title: 'Product Name',
    discount: 2700,
    description: 'Description',
    price: 2700,
    stock: 10,
    sku: 'SKU',
    category: 'Category',
    subcategory: 'Subcategory',
    brand: 'Brand',
    tags: ['productTag', 'productTag', 'productTag', 'productTag'],
    highlights: 'Text'
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
        
        {/* Left Side */}
        
            <div className="grid grid-cols-1 gap-4">
                <ProductName
                    title={productData.title}
                    description={productData.description}
                />

                <div className="grid grid-cols-2 gap-4">
                    <ProductDetails
                        title="Price"
                        description={productData.price}
                    />
                    <ProductDetails
                        title="Discount"
                        description={productData.discount}
                    />
                    <ProductDetails
                        title="Stock"
                        description={productData.stock}
                    />
                    <ProductDetails
                        title="SKU"
                        description={productData.sku}
                    />
                </div>

                <CategoryInfo
                    CategoryInfo={productData.category}
                    SubcategoryInfo={productData.subcategory}
                    Brand={productData.brand}
                />

                <Highlights
                    highlights={productData.highlights}
                />

                <ProductTags
                    tags={productData.tags}
                />
            </div>

        {/* Right Side */}
        <div className="grid grid-cols-1">
          
        </div>

      </div>
    </div>
  );
};

export default ViewProduct;