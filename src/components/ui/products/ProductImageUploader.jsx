import ProductImageCard from "./ProductImageCard";
import placeholderImage from "../../../assets/images/imgPlaceholder.jpg";
import { ImagePlus, X } from "lucide-react";

function ProductImageUploader({ images, onChange, markedKeys, onToggleMark, displayStyle, compact = false  }) {
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
    <div className="flex flex-col gap-3 ">
      {images.length === 0 ? (
       <div className={` w-47 border border-dashed border-gray-300 dark:border-[#2E364F] rounded-lg `}>
          <img
            src={placeholderImage}
            alt="No images uploaded yet"
            className={`w-full object-cover rounded-lg `}
          />
          <span className="block text-center text-xs text-gray-500 p-3">
            Image 1
          </span>
        </div>
      ) : (
      <div className="grid grid-cols-3 gap-3">
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
      <label className={`w-full flex flex-col items-center gap-1 border-2 text-[#8E4726] border-dashed border-[#8E4726BF] bg-[#FEE3C5] dark:bg-[#252C3F]  dark:border-[#2E364F] rounded-xl cursor-pointer ${compact ? " p-2" : "p-6"}`}>
        <div className="flex flex-col items-center gap-1 text-[#8E4726]">
        <ImagePlus color="#8E4726" strokeWidth={1} className="w-12 h-12 mt-2 mb-1 dark:color-[#CCCCC] " />
        <span className="text-2xl font-bold dark:text-[#CCCC]">Upload Images</span>
        <span className="text-sm dark:text-[#CCCC]">PNG, JPG, WEBP . multiple files supported</span>
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
          {images.map((img, i) => {
            const key = getKey(img);
            const marked = markedKeys?.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => onToggleMark(key)}
                className={`flex items-center justify-center gap-1 text-xs border rounded-full px-3 py-1 ${
                  marked ? "border-red-500 text-red-500 bg-red-500/10" : "border-gray-300 text-gray-400 dark:border-[#2E364F]"
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