import { ArrowLeft, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ProductFormHeader({ mode = "create", statusLabel, statusDescription }) {
 
  const navigate = useNavigate();

  const content =
    mode === "create"
      ? {
          eyebrow: "CREATE PRODUCT",
          title: "Launch a polished product entry",
          description: "Add products with validation, image previews, multi-upload support and smooth UX.",
          gradient: "from-orange-700 via-orange-800 to-orange-900", 
        }
      : {
          eyebrow: "EDIT PRODUCT",
          title: "Update and refine the product entry",
          description: "Review the current product data, add new images, remove existing ones, and save your updates safely.",
          gradient: "from-violet-700 via-violet-800 to-violet-900",
        };

  return (
    <div className="flex flex-col gap-4 mb-6">
    
      <button
        onClick={() => navigate("/dashboard/products")}
        className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 w-fit"
      >
        <ArrowLeft size={16} />
        Back to products
      </button>

      <div className={`relative rounded-2xl p-6 bg-gradient-to-r ${content.gradient} text-white overflow-hidden`}>

        <span className="flex items-center gap-1 text-xs font-semibold tracking-wide uppercase opacity-90">
          <LayoutGrid size={14} />
          {content.eyebrow}
        </span>

        <h1 className="text-2xl font-bold mt-1">{content.title}</h1>
        <p className="text-sm opacity-80 mt-1">{content.description}</p>

        {statusLabel && (
          <div className="absolute top-4 right-4 bg-black/30 rounded-lg px-3 py-1.5 text-right">
            <span className="text-xs font-bold tracking-wide">{statusLabel}</span>
            {statusDescription && (
              <p className="text-[11px] opacity-80">{statusDescription}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductFormHeader;