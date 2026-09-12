
function ProductImageCard({ src, index, onRemove }) {
 
  return (
    <div className="relative h-50 border border-gray-300 dark:border-[#2E364F] dark:bg-[#1E2435] rounded-lg ">
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-40 object-cover rounded-lg "
      />
      <span className="block text-center text-xs text-gray-500  p-4">
        Image {index + 1}
      </span>
      {onRemove && (
        <button type="button" onClick={onRemove} className="absolute top-1 right-1 bg-white rounded-full px-2 shadow">
          ✕
        </button>
      )}
    </div>
  );
}

export default ProductImageCard;