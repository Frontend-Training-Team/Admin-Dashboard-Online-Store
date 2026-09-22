import { Dot } from 'lucide-react';
import { motion } from 'framer-motion';

const CategoryCard = ({ CategoryInfo, SubcategoryInfo, Brand }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-5 rounded-2xl border border-brand-200/60 dark:border-white/[0.06]
    bg-brand-50/20 dark:bg-coal-700 shadow-xs">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-content-muted block mb-2">
        Category Info
      </span>
      <div className="text-sm font-medium text-brand-900 dark:text-content-primary flex items-center flex-wrap">
        <span>{CategoryInfo || 'Uncategorized'}</span>
        <Dot className="inline-block mx-1 text-brand-400 dark:text-content-muted" size={16} />
        <span>{SubcategoryInfo || 'None'}</span>
        <Dot className="inline-block mx-1 text-brand-400 dark:text-content-muted" size={16} />
        <span>{Brand || 'Generic'}</span>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
