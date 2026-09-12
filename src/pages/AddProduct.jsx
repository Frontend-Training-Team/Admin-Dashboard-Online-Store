import ProductForm from "../components/ui/products/AddProductForm";
import ProductFormHeader from "../components/ui/products/ProductFormHeader";
import { postCreateProductAdmin } from "../api/products.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddProduct() {
  const navigate = useNavigate();
  const handleCreate = async (formData) => {
    try {
      const res = await postCreateProductAdmin(formData);
      const newProduct = res.data.product;

      toast.success(`"${newProduct.name}" created successfully`);

      navigate("/products");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create product");
    }
  };

  return (
    <div>
      <ProductFormHeader
        mode="create"
        statusLabel="READY"
        statusDescription="Create, validate, and save with one click."
      />
      <ProductForm 
      mode="create" 
      onSubmit={handleCreate}
      onCancel={() => navigate("/products")}
      />
    </div>
  );
}

export default AddProduct;