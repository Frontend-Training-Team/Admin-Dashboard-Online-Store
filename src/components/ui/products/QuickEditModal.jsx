import ProductForm from "./ui/addProducts/ProductForm";

function QuickEditModal({ product, onClose, onSubmit }) {
  // product  -> the product being edited (passed in from wherever you open this modal)
  // onClose  -> function to close the modal
  // onSubmit -> function to call once the form is submitted

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* fixed inset-0 -> covers the whole screen. bg-black/50 -> dark see-through overlay. z-50 -> sits on top of everything */}
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Edit Product</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <ProductForm mode="edit" initialData={product} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
}

export default QuickEditModal;