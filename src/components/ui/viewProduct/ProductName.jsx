const ProductName = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
      <h2 className="uppercase text-xs font-bold text-gray-400 tracking-wider block mb-2">
        Overview
      </h2>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        {title}
      </h2>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ProductName;