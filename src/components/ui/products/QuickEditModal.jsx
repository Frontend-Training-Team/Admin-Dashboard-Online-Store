import ProductForm from "./ui/addProducts/ProductForm";

function QuickEditModal({ product, onClose, onSubmit }) {
 
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Edit Product</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <ProductForm 
          mode="edit" 
          initialData={product} 
          onSubmit={onSubmit} 
          onCancel={onClose} 
          showCard={false}
          />
      </div>
    </div>
  );
}

export default QuickEditModal;