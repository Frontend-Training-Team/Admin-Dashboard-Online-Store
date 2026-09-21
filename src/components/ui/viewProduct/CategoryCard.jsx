import { Dot } from 'lucide-react';

const CategoryCard = ({ CategoryInfo, SubcategoryInfo, Brand }) => {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-white/[0.06]
    bg-brand-50/20 dark:bg-coal-700 shadow-xs">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-[#8A8378] block mb-2">
        Category Info
      </span>
      <div className="text-sm font-medium text-brand-900 dark:text-[#F5F1EA] flex items-center flex-wrap">
        <span>{CategoryInfo || 'Uncategorized'}</span>
        <Dot className="inline-block mx-1 text-brand-400 dark:text-[#8A8378]" size={16} />
        <span>{SubcategoryInfo || 'None'}</span>
        <Dot className="inline-block mx-1 text-brand-400 dark:text-[#8A8378]" size={16} />
        <span>{Brand || 'Generic'}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
