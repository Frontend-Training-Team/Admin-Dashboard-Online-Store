const NameCard = ({ title, description }) => {
  return (
    <div className="border border-gray-100 rounded-2xl shadow-sm p-6">
      <h2 className="uppercase text-sm font-regular text-[#8E4726] tracking-[2px] mb-2">
        Overview
      </h2>
      <h2 className="text-[32px] font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default NameCard;