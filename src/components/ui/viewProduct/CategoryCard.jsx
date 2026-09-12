import { Dot } from 'lucide-react';

const CategoryCard = ({ CategoryInfo, SubcategoryInfo, Brand }) => {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm">
      <h2 className="text-lg text-gray-400 dark:text-brand-500 block mb-1">
        Category Info
      </h2>
      <div className="text-sm text-gray-400 dark:text-brand-300">
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