import { Trash2, X } from "lucide-react";

function ProductImageCard({ src, index, onRemove, marked, displayStyle = "instant", onToggleMark, compact = false }) {
  if (displayStyle === "pill") {
    return (
      <div className="relative rounded-xl overflow-hidden border border-brand-200/60 dark:border-white/[0.08] aspect-square">
        <img src={src} alt="Product" className="w-full h-full object-cover" />
        <span className="absolute bottom-1.5 left-1.5 bg-black/70 text-white text-[10px] font-medium rounded px-1.5 py-0.5">
          Image {index + 1}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col border border-brand-200/60 dark:border-white/[0.08] bg-white dark:bg-coal-700 rounded-xl overflow-hidden shadow-xs ${compact ? "h-36" : "h-48"} ${marked ? "opacity-60" : ""}`}>
      <div className="relative flex-1 bg-brand-50/30 dark:bg-[#12141A] overflow-hidden">
        <img
          src={src}
          alt="Product"
          className="w-full h-full object-cover"
        />

        {displayStyle === "instant" && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-1.5 right-1.5 bg-white/90 dark:bg-[#1F232B]/90 hover:bg-white
            dark:hover:bg-[#1F232B] text-brand-700 dark:text-[#F5F1EA] rounded-full p-1 shadow cursor-pointer transition"
          >
            <X size={14} />
          </button>
        )}

        {displayStyle === "overlay" && (
          <button
            type="button"
            onClick={onToggleMark}
            className={`absolute top-1.5 right-1.5 rounded-full p-1.5 shadow cursor-pointer transition ${marked
                ? "bg-rose-500 text-white"
                : "bg-white/90 dark:bg-[#1F232B]/90 text-brand-600 dark:text-[#8A8378]"
              }`}
          >
            <Trash2 size={14} />
          </button>
        )}
      </div>

      <div className="p-2 text-center border-t border-brand-100 dark:border-white/[0.04]">
        {displayStyle === "instant" && (
          <span className="block text-[11px] font-medium text-brand-500 dark:text-[#8A8378]">Image {index + 1}</span>
        )}

        {displayStyle === "overlay" && (
          <span className={`block text-[11px] font-semibold uppercase tracking-wider ${marked ? "text-rose-500" : "text-brand-500 dark:text-[#8A8378]"}`}>
            {marked ? "Marked to Remove" : `Image ${index + 1}`}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProductImageCard;
