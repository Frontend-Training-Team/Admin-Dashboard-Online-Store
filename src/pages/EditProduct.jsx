import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ui/products/AddProductForm";
import ProductFormHeader from "../components/ui/products/ProductFormHeader";
import { getSingleproduct, patchUpdateProductAdmin } from "../api/products.api";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getSingleproduct(id).then((res) => setProduct(res.data));
  }, [id]);

  const handleUpdate = async (formData) => {
    await patchUpdateProductAdmin(id, formData);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <ProductFormHeader
        mode="edit"
        statusLabel="LIVE"
        statusDescription="Connected to the real product update API."
      />
      <ProductForm mode="edit" initialData={product} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditProduct;