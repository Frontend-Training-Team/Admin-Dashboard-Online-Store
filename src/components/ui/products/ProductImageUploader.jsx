import ProductImageCard from "./ProductImageCard";
import placeholderImage from "../../../assets/images/imgPlaceholder.jpg";
import { ImagePlus, X } from "lucide-react";

function ProductImageUploader({ images, onChange, markedKeys, onToggleMark, displayStyle, compact = false }) {
  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    onChange([...images, ...newFiles]);
  };

  const removeInstant = (index) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const getKey = (img) => img.public_id || img.previewUrl;

  return (
    <div className="flex flex-col gap-3">
      {images.length === 0 ? (
        <div className="w-48 border border-dashed border-brand-200 dark:border-white/[0.08] rounded-xl
        overflow-hidden bg-brand-50/20 dark:bg-[#181B22]">
          <img
            src={placeholderImage}
            alt="No images uploaded yet"
            className="w-full h-36 object-cover"
          />
          <span className="block text-center text-xs text-brand-500 dark:text-[#8A8378] p-2.5">
            No image selected
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((img, i) => (
            <ProductImageCard
              key={getKey(img)}
              src={img.previewUrl || img.url}
              index={i}
              displayStyle={displayStyle}
              marked={displayStyle !== "instant" && markedKeys?.includes(getKey(img))}
              onRemove={() => removeInstant(i)}
              onToggleMark={() => onToggleMark(getKey(img))}
              compact={compact}
            />
          ))}
        </div>
      )}

      <label className={`w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#C98156]/40 hover:border-[#C98156] bg-[#C98156]/5 dark:bg-[#181B22] dark:hover:bg-[#1F232B] rounded-2xl cursor-pointer transition-all ${compact ? "p-3" : "p-6"}`}>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#C98156]/10 dark:bg-[#2A1B12] flex items-center justify-center text-[#C98156]">
            <ImagePlus size={20} />
          </div>
          <span className="text-sm font-semibold text-brand-950 dark:text-[#F5F1EA]">Upload Images</span>
          <span className="text-xs text-brand-500 dark:text-[#8A8378]">PNG, JPG, WEBP • multiple files supported</span>
        </div>
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>

      {displayStyle === "pill" && images.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {images.map((img) => {
            const key = getKey(img);
            const marked = markedKeys?.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => onToggleMark(key)}
                className={`flex items-center justify-center gap-1 text-xs border rounded-full px-3 py-1
                  cursor-pointer transition
                  ${marked
                    ? "border-rose-500 text-rose-500 bg-rose-500/10"
                    : "border-brand-200 dark:border-white/[0.08] text-brand-600 dark:text-[#8A8378]"
                  }`}
              >
                <X size={12} />
                Remove
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductImageUploader;
