import { Trash2, X } from "lucide-react";
function ProductImageCard({ src, index, onRemove, marked, displayStyle = "instant",onToggleMark, compact=false }) {
  if (displayStyle === "pill") {
    return (
      <div className={`relative rounded-lg overflow-hidden border border-gray-300 dark:border-[#2E364F] aspect-square`}>
        <img src={src} alt="Product" className="w-full h-full object-cover" />
        <span className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-xs font-medium rounded px-1.5 py-0.5">
          Image {index + 1}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 border border-gray-300 dark:border-[#2E364F] dark:bg-[#1E2435] rounded-lg ${compact ? "h-40" : "h-50"} ${marked ? "opacity-80" : ""}`}>
    <div className="relative  ">
      <img
        src={src}
        alt={`Product`}
        className={`w-full object-cover rounded-lg ${compact ? "h-30" : "h-40"}`}
      />

      {displayStyle === "instant" && onRemove && (
          <button type="button" onClick={onRemove} className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
            <X size={14} />
          </button>
        )}

        {displayStyle === "overlay" && (
          <button
            type="button"
            onClick={onToggleMark}
            className={`absolute top-1 right-1 rounded-full p-1.5 shadow ${
              marked ? "bg-red-500 text-white" : "bg-white text-gray-400"
            }`}
          >
            <Trash2 size={14} />
          </button>
        )}
          </div>
      {displayStyle === "instant" && (
        <span className="block text-center text-xs text-gray-500">Image {index + 1}</span>
      )}

      {displayStyle === "overlay" && (
        <span className={`block text-center text-xs font-medium ${marked ? "text-red-500" : "text-gray-500"}`}>
          {marked ? "MARKED TO REMOVE" : `Image ${index + 1}` }
        </span>
      )}
  
    </div>
  );
}

export default ProductImageCard;