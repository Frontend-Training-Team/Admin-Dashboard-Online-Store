import ProductForm from "../components/ui/products/AddProductForm";
import { postCreateProductAdmin } from "../api/products.api";

function AddProduct() {
  const handleCreate = async (formData) => {
    // this runs when ProductForm calls onSubmit(formData)
    await postCreateProductAdmin(formData);
    // TODO: show a success toast, then navigate back to /dashboard/products
  };

  return <ProductForm mode="create" onSubmit={handleCreate} />;
}

export default AddProduct;