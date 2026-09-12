const DetailsCard = ({ title , cardData }) => {
  return (
    <div className="p-6 border border-gray-100 dark:border-brand-800 rounded-2xl shadow-sm">
      <h2 className="text-lg font-normal text-gray-400 dark:text-brand-500 block mb-2">
        {title}
      </h2>
      <h2 className="text-2xl font-bold text-black dark:text-white mb-1">
        {cardData}
      </h2>
    </div>
  );
};

export default DetailsCard;