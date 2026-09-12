import AddProductForm from "./AddProductForm.jsx";
import { X } from "lucide-react";

function QuickEditModal({ product, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1E2435] rounded-xl w-full max-w-4xl h-[700px] flex flex-col overflow-hidden">
        <div className="shrink-0 flex justify-between items-center px-5 py-3 border-b border-gray-200 dark:border-slate-700">
          <h2 className=" text-[#8E4726] text-xl font-semibold dark:text-white">Edit Product</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 bg-gray-100 dark:bg-slate-800 text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            <X size={16} />
          </button>
        </div>

        <div className="fill hug flex-1 overflow-hidden px-5 py-3">
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