import AddProductForm from "./AddProductForm.jsx";
import { X } from "lucide-react";

function QuickEditModal({ product, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-sm">
      <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-[1120px] flex-col overflow-hidden rounded-lg bg-white shadow-xl dark:bg-[#1E2435]">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-slate-700">
          <h2 className="text-xl font-bold text-[#8E4726] dark:text-white">Edit Product</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-[#8E4726] hover:bg-[#FEE3C5] dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            <X size={16} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          <AddProductForm
            mode="edit"
            initialData={product}
            onSubmit={onSubmit}
            onCancel={onClose}
            showCard={false}
          />
        </div>
      </div>
    </div>
  );
}

export default QuickEditModal;