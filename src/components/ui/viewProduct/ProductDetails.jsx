const ProductDetails = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        {title}
      </h2>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ProductDetails;