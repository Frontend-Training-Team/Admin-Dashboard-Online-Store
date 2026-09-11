import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ui/products/AddProductForm";
import { getSingleproduct, patchUpdateProductAdmin } from "../api/products.api";

function EditProduct() {
  const { id } = useParams();
  // :id comes from the URL, e.g. /dashboard/products/64abc.../edit -> id = "64abc..."

  const [product, setProduct] = useState(null);
  // starts as null -> we don't have the product data yet, still loading

  useEffect(() => {
    getSingleproduct(id).then((res) => setProduct(res.data));
    // fetch the product once, when the page first loads
  }, [id]);

  const handleUpdate = async (formData) => {
    await patchUpdateProductAdmin(id, formData);
  };

  if (!product) return <p>Loading...</p>;
  // don't render the form until we actually have data to pre-fill it with

  return <ProductForm mode="edit" initialData={product} onSubmit={handleUpdate} />;
}

export default EditProduct;