// One image preview tile — shows a single uploaded/existing image
function ProductImageCard({ src, index, onRemove }) {
  // src      -> the image URL to display (could be a new upload's preview, or an existing product image)
  // index    -> which position this image is in the list (used for the "Image N" label)
  // onRemove -> function to call when the ✕ button is clicked

  return (
    <div className="relative">
      {/* relative -> lets us position the ✕ button on TOP of the image using "absolute" below */}
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-32 object-cover rounded-lg border"
      />
      <span className="block text-center text-xs text-gray-500 mt-1">
        Image {index + 1}
      </span>
      {onRemove && (
        // only show the remove button if onRemove was actually passed in
        <button onClick={onRemove} className="absolute top-1 right-1 bg-white rounded-full px-2 shadow">
          ✕
        </button>
      )}
    </div>
  );
}

export default ProductImageCard;