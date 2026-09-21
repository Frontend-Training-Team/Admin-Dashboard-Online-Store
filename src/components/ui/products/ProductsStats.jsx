import { Package, Star, TrendingUp, AlertTriangle } from 'lucide-react';
import UserStatCard from '../user/UserStatCard';

const StatCard = ({ icon: Icon, label, value, loading = false }) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-brand-200/60 bg-white p-4 sm:p-5 shadow-xs dark:border-[rgba(255,255,255,0.06)] dark:bg-[#12141A]">
    <span className="text-brand-500 dark:text-copper-500 text-xl">
      <Icon className="h-6 w-6" />
    </span>
    <div>
      {loading ? (
        <div className="h-8 w-14 rounded-md bg-gray-200 dark:bg-coal-700 animate-pulse my-0.5" />
      ) : (
        <p className="text-2xl sm:text-3xl font-bold text-brand-900 dark:text-[#F5F1EA]">{value}</p>
      )}
      <p className="text-xs text-brand-500 dark:text-[#8A8378] uppercase tracking-wider mt-1">{label}</p>
    </div>
  </div>
);

const ProductsStats = ({ stats, loading = false }) => {
  const { total = 0, featured = 0, inStock = 0, outOfStock = 0 } = stats || {};

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {/* <StatCard icon={Package} label="Total" value={total} loading={loading} /> */}
      <UserStatCard title="Total" value={stats.total} icon={<Package size={24} />}/>
      <UserStatCard title="Featured" value={stats.featured} icon={<Star size={24} />}/>
      <UserStatCard title="In Stock" value={stats.inStock} icon={<TrendingUp size={24} />}/>
      <UserStatCard title="Out of Stock" value={stats.outOfStock} icon={<AlertTriangle size={24} />}/>
      {/* <StatCard icon={Star} label="Featured" value={featured} loading={loading} />
      <StatCard icon={TrendingUp} label="In Stock" value={inStock} loading={loading} />
      <StatCard icon={AlertTriangle} label="Out of Stock" value={outOfStock} loading={loading} /> */}
    </div>
  );
};

export default ProductsStats;