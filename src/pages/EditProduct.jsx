import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ui/products/AddProductForm";
import ProductFormHeader from "../components/ui/products/ProductFormHeader";
import { getSingleproduct, patchUpdateProductAdmin } from "../api/products.api";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleproduct(id).then((res) => setProduct(res.data.product));
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      await patchUpdateProductAdmin(id, formData);
      toast.success("Product updated successfully");
      navigate("/products");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update product");
    }
  };

  if (!product) {
    return (
      <div className="flex h-96 items-center justify-center gap-2 text-copper-500">
        <Loader2 size={24} className="animate-spin" />
        <span className="text-sm font-medium text-brand-900 dark:text-content-primary">Loading product...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ProductFormHeader
        mode="edit"
        statusLabel="LIVE"
        statusDescription="Connected to the real product update API."
      />
      <ProductForm
        mode="edit" 
        initialData={product} 
        onSubmit={handleUpdate} 
        onCancel={() => navigate("/products")}
      />
    </div>
  );
}

export default EditProduct;
