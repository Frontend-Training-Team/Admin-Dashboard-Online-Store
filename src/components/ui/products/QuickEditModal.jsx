import AddProductForm from "./AddProductForm.jsx";
import { X } from "lucide-react";

function QuickEditModal({ product, onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-[1120px] flex-col overflow-hidden rounded-2xl
      bg-white dark:bg-coal-700 border border-brand-200/60 dark:border-white/[0.08] shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-brand-200/60
        dark:border-white/[0.06] px-6 py-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-copper-500 uppercase">Quick Edit</span>
            <h2 className="text-xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA]">
              {product?.name || "Edit Product"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-brand-500 hover:text-brand-900 hover:bg-brand-100 dark:text-[#8A8378] dark:hover:text-[#F5F1EA] dark:hover:bg-[#1F232B] transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
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
