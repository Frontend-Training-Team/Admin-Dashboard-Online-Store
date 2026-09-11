
function ProductImageCard({ src, index, onRemove }) {
 
  return (
    <div className="relative">
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-32 object-cover rounded-lg border"
      />
      <span className="block text-center text-xs text-gray-500 mt-1">
        Image {index + 1}
      </span>
      {onRemove && (
        <button onClick={onRemove} className="absolute top-1 right-1 bg-white rounded-full px-2 shadow">
          ✕
        </button>
      )}
    </div>
  );
}

export default ProductImageCard;