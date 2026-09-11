import { Dot } from 'lucide-react';

const CategoryCard = ({ CategoryInfo, SubcategoryInfo, Brand }) => {
  return (
    <div className="p-5 rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-[16px] text-[#8E4726] block mb-1">
        Category Info
      </h2>
      <div className="text-[14px] text-gray-400">
        {CategoryInfo}
        <Dot className="inline-block mx-1" size={12} />
        {SubcategoryInfo}
        <Dot className="inline-block mx-1" size={12} />
        {Brand}
      </div>
    </div>
  );
};

export default CategoryCard;