import { Package, Star, TrendingUp, AlertTriangle } from 'lucide-react';
import UserStatCard from '../user/UserStatCard';

const ProductsStats = ({ stats }) => {
  const { total = 0, featured = 0, inStock = 0, outOfStock = 0 } = stats || {};

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

      <UserStatCard className="font-bold sm:text-2xl!"
        title="Total"
        value={total}
        icon={<Package size={24} />}
      />
      <UserStatCard className="font-bold sm:text-2xl!"
        title="featured"
        value={featured}
        icon={<Star size={24} />}
      />
      <UserStatCard className="font-bold sm:text-2xl!"
        title="inStock"
        value={inStock}
        icon={<TrendingUp size={24} />}
      />
      <UserStatCard className="font-bold sm:text-2xl!"
        title="outOfStock"
        value={outOfStock}
        icon={<AlertTriangle size={24} />}
      />
    </div>
  );
};

export default ProductsStats;