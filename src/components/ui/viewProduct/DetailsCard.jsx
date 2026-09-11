const DetailsCard = ({ title , cardData }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
      <h2 className="text-[16px] font-normal text-[#8E4726] block mb-2">
        {title}
      </h2>
      <h2 className="text-2xl font-bold text-black mb-1">
        {cardData}
      </h2>
    </div>
  );
};

export default DetailsCard;