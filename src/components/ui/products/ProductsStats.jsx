import { Package, Star, TrendingUp, AlertTriangle } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col gap-3 rounded-xl border border-brand-200/60 bg-white p-4 dark:border-brand-900/40 dark:bg-surface-cardDark">
    <span className="text-brand-500 text-xl">
      <Icon className="h-6 w-6" />
    </span>
    <div>
      <p className="text-2xl font-bold text-brand-900 dark:text-brand-50">{value}</p>
      <p className="text-xs text-brand-500">{label}</p>
    </div>
  </div>
);

const ProductsStats = ({ stats }) => {
  const { total = 0, featured = 0, inStock = 0, outOfStock = 0 } = stats || {};

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard icon={Package} label="Total" value={total} />
      <StatCard icon={Star} label="Featured" value={featured} />
      <StatCard icon={TrendingUp} label="In Stock" value={inStock} />
      <StatCard icon={AlertTriangle} label="Out of Stock" value={outOfStock} />
    </div>
  );
};

export default ProductsStats;