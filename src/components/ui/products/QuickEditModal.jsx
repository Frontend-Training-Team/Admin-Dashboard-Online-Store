// import ProductForm from "./AddProductForm";

// function QuickEditModal({ product, onClose, onSubmit }) {
 
//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

//       <div className="bg-white rounded-xl p-6 max-w-3xl w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="font-semibold">Edit Product</h2>
//           <button onClick={onClose}>✕</button>
//         </div>
//         <ProductForm 
//           mode="edit" 
//           initialData={product} 
//           onSubmit={onSubmit} 
//           onCancel={onClose} 
//           showCard={false}
//           />
//       </div>
//     </div>
//   );
// }

// export default QuickEditModal;


import ProductForm from "./AddProductForm";

function QuickEditModal({ product, onClose, onSubmit }) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-surface-cardDark text-gray-900 dark:text-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100 dark:border-brand-900/40">
          <h2 className="text-lg font-bold text-brand-900 dark:text-brand-50">Quick Edit Product</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-lg p-1 transition"
          >
            ✕
          </button>
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