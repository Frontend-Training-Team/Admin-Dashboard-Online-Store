import ProductImageCard from "./ProductImageCard";

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

    // if it's a plain string, it's an EXISTING image from the backend -> track it for deletion
    if (typeof imageToRemove === "string" && onRemoveExisting) {
      onRemoveExisting(imageToRemove);
    }
    // if it's an object (a new upload not yet saved), we just drop it — nothing to tell the backend

    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <ProductImageCard
            key={i}
            src={img.previewUrl || img}
            index={i}
            onRemove={() => removeImage(i)}
          />
        ))}
      </div>

      <label className="flex flex-col items-center gap-1 border-2 border-dashed border-orange-300 bg-orange-50 dark:bg-slate-800 dark:border-slate-600 rounded-xl p-6 cursor-pointer">
        <span className="text-sm font-medium">Add more photos</span>
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