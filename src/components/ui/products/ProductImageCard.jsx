import { Trash2, X } from "lucide-react";
function ProductImageCard({ src, index, onRemove, marked, displayStyle = "instant",onToggleMark }) {
 
  return (
    <div className={`flex flex-col gap-2 h-50 border border-gray-300 dark:border-[#2E364F] dark:bg-[#1E2435] rounded-lg ${marked ? "opacity-50" : ""}`}>
    <div className="relative  ">
      <img
        src={src}
        alt={`Product`}
        className="w-full h-40 object-cover rounded-lg "
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
          {marked ? "MARKED TO REMOVE" : "Image"}
        </span>
      )}

      {displayStyle === "pill" && (
        <button
          type="button"
          onClick={onToggleMark}
          className={`flex items-center justify-center gap-1 text-xs border rounded-full px-3 py-1 w-fit mx-auto ${
            marked ? "border-red-500 text-red-500 bg-red-500/10" : "border-gray-300 text-gray-400 dark:border-[#2E364F]"
          }`}
        >
          <X size={12} />
          {marked ? "Marked to remove" : "Remove"}
        </button>
      )}
  
    </div>
  );
}

export default ProductImageCard;