const NameCard = ({ title, description }) => {
  return (
    <div className="p-6 border border-gray-100 dark:border-brand-800 rounded-2xl shadow-sm">
      <h2 className="uppercase text-sm font-regular text-gray-400 dark:text-brand-500 tracking-[2px] mb-2">
        Overview
      </h2>
      <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-sm text-gray-400 dark:text-brand-300">
        {description}
      </p>
    </div>
  );
};

export default NameCard;