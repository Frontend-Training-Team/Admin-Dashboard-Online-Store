import ProductForm from "../components/ui/products/AddProductForm";
import ProductFormHeader from "../components/ui/products/ProductFormHeader";
import { postCreateProductAdmin } from "../api/products.api";

function AddProduct() {
  const handleCreate = async (formData) => {
    await postCreateProductAdmin(formData);
  };

  return (
    <div>
      <ProductFormHeader
        mode="create"
        statusLabel="READY"
        statusDescription="Create, validate, and save with one click."
      />
      <ProductForm mode="create" onSubmit={handleCreate} />
    </div>
  );
}

export default AddProduct;