const CategoryInfo = ({ CategoryInfo, SubcategoryInfo, Brand }) => {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-white dark:bg-brand-950/20 shadow-sm">
      <h2 className="text-xs text-brand-500 dark:text-brand-400 block mb-1">
        Category Info
      </h2>
      <p className="text-xs text-brand-400 dark:text-brand-500">
        {CategoryInfo}, {SubcategoryInfo}, {Brand}
      </p>
    </div>
  );
};

export default CategoryInfo;