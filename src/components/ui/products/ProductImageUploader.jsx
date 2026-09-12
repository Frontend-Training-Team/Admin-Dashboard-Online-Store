import ProductImageCard from "./ProductImageCard";
import placeholderImage from "../../../assets/images/imgPlaceholder.jpg";
import { ImagePlus } from "lucide-react";

function ProductImageUploader({ images, onChange, onRemoveExisting }) {
  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    onChange([...images, ...newFiles]);
  };

  const removeImage = (index) => {
    const imageToRemove = images[index];
    if (typeof imageToRemove === "string" && onRemoveExisting) {
      onRemoveExisting(imageToRemove);
    }
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3 ">
      {images.length === 0 ? (
       <div className=" w-47 h-50 border border-dashed border-gray-300 dark:border-[#2E364F] rounded-lg ">
          <img
            src={placeholderImage}
            alt="No images uploaded yet"
            className="w-full h-40 object-cover rounded-lg"
          />
          <span className="block text-center text-xs text-gray-500 p-3">
            Image 1
          </span>
        </div>
      ) : (
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <ProductImageCard
            key={i}
            src={img.previewUrl || img}
            index={i}
            onRemove={() => removeImage(i)}
          />
        ))}
      </div>
      )}
      <label className="w-full h-44 flex flex-col items-center gap-1 border-2 text-[#8E4726] border-dashed border-[#8E4726BF] bg-[#FEE3C5] dark:bg-[#252C3F]  dark:border-[#2E364F] rounded-xl p-6 cursor-pointer">
        <div className="flex flex-col items-center gap-1 text-[#8E4726]">
        <ImagePlus color="#8E4726" strokeWidth={1} className="w-12 h-12 mt-2 mb-1 dark:color-[#CCCC] " />
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
    </div>
  );
}

export default ProductImageUploader;