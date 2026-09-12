import { useState } from "react";
import QuickEditModal from "../components/ui/products/QuickEditModal";
import { getSingleproduct, patchUpdateProductAdmin } from "../api/products.api";

function TestQuickEdit() {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  // Paste a REAL product ID here — one you know exists in your database
  const testProductId = "6aa4ef58e9bc44b30790385f";

  const openModal = async () => {
    const res = await getSingleproduct(testProductId);
    setProduct(res.data.product); 
    setShowModal(true);
  };

  const handleSubmit = async (formData) => {
    try {
      const res = await patchUpdateProductAdmin(testProductId, formData);
      console.log("Update succeeded:", res.data);
      setShowModal(false);
    } catch (err) {
      console.error("Update failed:", err.response?.data || err);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={openModal} className="bg-orange-800 text-white px-4 py-2 rounded-lg">
        Open Quick Edit Modal
      </button>

      {showModal && product && (
        <QuickEditModal
          product={product}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default TestQuickEdit;