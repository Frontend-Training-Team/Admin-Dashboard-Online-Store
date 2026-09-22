import { useEffect, useState } from 'react';
import { ShoppingBag, Clock, DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import imgUser from '../assets/images/Guest.jpg';
import { getAdminDashboard } from '../api/ordersAdmin.api';
import StatCard from '../components/ui/dashboard/StatCard';
import OrderStatusCard from '../components/ui/dashboard/OrderStatusCard';
import BestSellerItem from '../components/ui/dashboard/BestSellerItem';
import RecentOrderItem from '../components/ui/dashboard/RecentOrderItem';
import StatCardSkeleton from '../components/ui/skeletons/StatCardSkeleton';
import ProductCardSkeleton from '../components/ui/skeletons/ProductCardSkeleton';
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await getAdminDashboard();
        let response = res.data;
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const stats = [
    {
      title: 'Total Orders',
      value: `${data?.dashboard?.orders?.total || 0}`,
      desc: 'All Orders Received',
      icon: <ShoppingBag size={18} />,
      color: 'text-state-success',
      borderLeft: 'border-l-state-success dark:border-l-state-success',
    },
    {
      title: 'Pending Orders',
      value: `${data?.dashboard?.orders?.pending || 0}`,
      desc: 'Awaiting Action',
      icon: <Clock size={18} />,
      color: 'text-state-warning',
      borderLeft: 'border-l-state-warning dark:border-l-state-warning',
    },
    {
      title: 'This Month',
      value: `$${data?.dashboard?.revenue?.thisMonth || 0}`,
      desc: 'Monthly Sales Target',
      icon: <ShoppingCart size={18} />,
      color: 'text-state-info',
      borderLeft: 'border-l-state-info dark:border-l-state-info',
    },
    {
      title: 'Revenue',
      value: `$${data?.dashboard?.revenue?.total || 0}`,
      desc: 'Total Gross Revenue',
      icon: <DollarSign size={18} />,
      color: 'text-state-danger',
      borderLeft: 'border-l-state-danger dark:border-l-state-danger',
    },
    {
      title: 'Top Product',
      value: `${data?.dashboard?.topProducts?.[0]?.name || 'N/A'}`,
      desc: '53 Units Sold',
      icon: <Package size={18} />,
      color: 'text-state-shipped',
      borderLeft: 'border-l-state-shipped dark:border-l-state-shipped',
    },
    {
      title: 'Users',
      value: `${data?.dashboard?.totalCustomers || 0}`,
      desc: 'Registered Customers',
      icon: <Users size={18} />,
      color: 'text-state-muted',
      borderLeft: 'border-l-state-muted dark:border-l-state-muted',
    },
  ];

  const orderStatuses = [
    {
      label: 'PENDING',
      count: `${data?.dashboard?.ordersByStatus?.[5]?.count || 0}`,
      textColor: 'text-[#F6B704] dark:text-state-warning',
      bgStyle: 'bg-[#FFF4D3] dark:bg-[rgba(245,181,68,0.10)] border-[#FFDF88] dark:border-[rgba(245,181,68,0.24)]'
    },
    {
      label: 'PROCESSING',
      count: `${data?.dashboard?.ordersByStatus?.[4]?.count || 0}`,
      textColor: 'text-[#4280EF] dark:text-state-info',
      bgStyle: 'bg-[#E5F5FC] dark:bg-[rgba(95,168,245,0.10)] border-[#ADE6FF] dark:border-[rgba(95,168,245,0.24)]'
    },
    {
      label: 'CONFIRMED',
      count: `${data?.dashboard?.ordersByStatus?.[0]?.count || 0}`,
      textColor: 'text-[#008E5C] dark:text-state-confirmed',
      bgStyle: 'bg-[#E6F7F1] dark:bg-[rgba(63,211,176,0.10)] border-[#AEFFE2] dark:border-[rgba(63,211,176,0.24)]'
    },
    {
      label: 'SHIPPED',
      count: `${data?.dashboard?.ordersByStatus?.[3]?.count || 0}`,
      textColor: 'text-[#755AB1] dark:text-[#A78BFA]',
      bgStyle: 'bg-[#F2EDFD] dark:bg-[rgba(167,139,250,0.10)] border-[#D0BAFF] dark:border-[rgba(167,139,250,0.24)]'
    },
    {
      label: 'DELIVERED',
      count: `${data?.dashboard?.ordersByStatus?.[2]?.count || 0}`,
      textColor: 'text-[#008E5C] dark:text-state-confirmed',
      bgStyle: 'bg-[#E6F7F1] dark:bg-[rgba(74,222,155,0.10)] border-[#AEFFE2] dark:border-[rgba(74,222,155,0.24)]'
    },
    {
      label: 'CANCELLED',
      count: `${data?.dashboard?.ordersByStatus?.[1]?.count || 0}`,
      textColor: 'text-[#E54335] dark:text-state-danger',
      bgStyle: 'bg-[#FDEAEE] dark:bg-[rgba(248,113,113,0.10)] border-[#FFB8C7] dark:border-[rgba(248,113,113,0.24)]'
    },
  ];

  const bestSellers = [
    {
      name: `${data?.dashboard?.topProducts?.[0]?.name || "N/A"}`,
      details: `${data?.dashboard?.topProducts?.[0]?.totalSold || 0} Units Sold • $${data?.dashboard?.topProducts?.[0]?.revenue || 0}`,
      img: `${data?.dashboard?.topProducts?.[0]?.image || imgUser}`
    },
    {
      name: `${data?.dashboard?.topProducts?.[1]?.name || "N/A"}`,
      details: `${data?.dashboard?.topProducts?.[1]?.totalSold || 0} Units Sold • $${data?.dashboard?.topProducts?.[1]?.revenue || 0}`,
      img: `${data?.dashboard?.topProducts?.[1]?.image || imgUser}`
    },
    {
      name: `${data?.dashboard?.topProducts?.[2]?.name || "N/A"}`,
      details: `${data?.dashboard?.topProducts?.[2]?.totalSold || 0} Units Sold • $${data?.dashboard?.topProducts?.[2]?.revenue || 0}`,
      img: `${data?.dashboard?.topProducts?.[2]?.image || imgUser}`
    },
    {
      name: `${data?.dashboard?.topProducts?.[3]?.name || "N/A"}`,
      details: `${data?.dashboard?.topProducts?.[3]?.totalSold || 0} Units Sold • $${data?.dashboard?.topProducts?.[3]?.revenue || 0}`,
      img: `${data?.dashboard?.topProducts?.[3]?.image || imgUser}`
    },
    {
      name: `${data?.dashboard?.topProducts?.[4]?.name || "N/A"}`,
      details: `${data?.dashboard?.topProducts?.[4]?.totalSold || 0} Units Sold • $${data?.dashboard?.topProducts?.[4]?.revenue || 0}`,
      img: `${data?.dashboard?.topProducts?.[4]?.image || imgUser}`
    }
  ];

  const recentActivity = [
    {
      customer: `${data?.dashboard?.recentOrders[0].user?.username || "Customer"}`,
      product: `${data?.dashboard?.recentOrders[0].items[0].name || "product name"}`,
      status: `${data?.dashboard?.recentOrders[0].status || "status"}`,
      price: `$${data?.dashboard?.recentOrders[0].items[0].price || 0}`
    },
    {
      customer: `${data?.dashboard?.recentOrders[1].user?.username || "Customer"}`,
      product: `${data?.dashboard?.recentOrders[1].items[0].name || "product name"}`,
      status: `${data?.dashboard?.recentOrders[1].status || "status"}`,
      price: `$${data?.dashboard?.recentOrders[1].items[0].price || 0}`
    },
    {
      customer: `${data?.dashboard?.recentOrders[2].user?.username || "Customer"}`,
      product: `${data?.dashboard?.recentOrders[2].items[0].name || "product name"}`,
      status: `${data?.dashboard?.recentOrders[2].status || "status"}`,
      price: `$${data?.dashboard?.recentOrders[2].items[0].price || 0}`
    },
    {
      customer: `${data?.dashboard?.recentOrders[3].user?.username || "Customer"}`,
      product: `${data?.dashboard?.recentOrders[3].items[0].name || "product name"}`,
      status: `${data?.dashboard?.recentOrders[3].status || "status"}`,
      price: `$${data?.dashboard?.recentOrders[3].items[0].price || 0}`
    },
    {
      customer: `${data?.dashboard?.recentOrders[4].user?.username || "Customer"}`,
      product: `${data?.dashboard?.recentOrders[4].items[0].name || "product name"}`,
      status: `${data?.dashboard?.recentOrders[4].status || "status"}`,
      price: `$${data?.dashboard?.recentOrders[4].items[0].price || 0}`
    },

  ];

  return (
    <div className="space-y-6">
      {/* Top Header Section */}
      {isLoading ? (
        <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] 
        bg-surface-cardLight dark:bg-coal-800 shadow-sm animate-none space-y-3">
          <div className="h-3.5 w-32 bg-gray-200 dark:bg-coal-700 rounded"></div>
          <div className="h-8 w-72 bg-gray-200 dark:bg-coal-700 rounded"></div>
          <div className="h-4 w-60 bg-gray-200 dark:bg-coal-700 rounded"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="p-6 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] 
       bg-surface-cardLight dark:bg-coal-800 shadow-sm">
          <span className="text-sm font-Regular tracking-widest text-brand-500 dark:text-copper-500 uppercase">
            ADMIN OVERVIEW
          </span>
          <h1 className="text-3xl font-bold text-black dark:text-content-primary mt-1">
            Real-time Store Health
          </h1>
          <p className="text-sm text-gray-400 dark:text-content-secondary mt-1">
            Monitor your storefront with live API metrics.
          </p>
        </motion.div>
      )
      }

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard {...stats[0]} />
            <StatCard {...stats[1]} />
            <StatCard {...stats[2]} />
            <StatCard {...stats[3]} />
            <StatCard {...stats[4]} />
            <StatCard {...stats[5]} />
          </>
        )}
      </div>

      {/* Order Status Section */}
      <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] 
      bg-surface-cardLight dark:bg-coal-800 shadow-sm">
        {isLoading ? (
          <div className="space-y-2 mb-4 animate-pulse">
            <div className="h-3.5 w-28 bg-gray-200 dark:bg-coal-700 rounded"></div>
            <div className="h-7 w-64 bg-gray-200 dark:bg-coal-700 rounded"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-Regular tracking-widest text-brand-500 dark:text-copper-500 uppercase">
                ORDER STATUS
              </span>
              <h2 className="text-2xl font-bold text-brand-900 dark:text-content-primary">
                Live Fulfillment Breakdown
              </h2>
            </div>
            <span className="block text-[11px] px-4 py-1.5 rounded-full font-medium bg-emerald-500/10 
            text-emerald-500 border border-emerald-500/20 dark:bg-[rgba(74,222,155,0.10)] 
            dark:text-state-confirmed dark:border-[rgba(74,222,155,0.24)]">
              Updated from API
            </span>
          </motion.div >
        )}

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-3">
          {isLoading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <OrderStatusCard {...orderStatuses[0]} />
              <OrderStatusCard {...orderStatuses[1]} />
              <OrderStatusCard {...orderStatuses[2]} />
              <OrderStatusCard {...orderStatuses[3]} />
              <OrderStatusCard {...orderStatuses[4]} />
              <OrderStatusCard {...orderStatuses[5]} />
            </>
          )}
        </div>
      </div >

      {/* Top Products & Recent Activity Section */}
      < div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >

        {/* Best Sellers */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="p-6 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] 
        bg-surface-cardLight dark:bg-coal-800 shadow-sm">
          {
            isLoading ? (
              <div className="space-y-2 mb-4 animate-pulse" >
                <div className="h-3.5 w-28 bg-gray-200 dark:bg-coal-700 rounded"></div>
                <div className="h-7 w-48 bg-gray-200 dark:bg-coal-700 rounded"></div>
              </div>
            ) : (
              <div className="mb-4">
                <span className="text-sm font-Regular tracking-widest text-brand-500 dark:text-copper-500 uppercase">
                  TOP PRODUCTS
                </span>
                <h2 className="text-2xl font-bold text-brand-900 dark:text-content-primary">
                  Best Sellers
                </h2>
              </div>
            )}

          <div className="space-y-3">
            {isLoading ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : (
              <>
                <BestSellerItem {...bestSellers[0]} />
                <BestSellerItem {...bestSellers[1]} />
                <BestSellerItem {...bestSellers[2]} />
                <BestSellerItem {...bestSellers[3]} />
                <BestSellerItem {...bestSellers[4]} />
              </>
            )}
          </div>
        </motion.div >

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="p-6 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] 
        bg-surface-cardLight dark:bg-coal-800 shadow-sm">
          {
            isLoading ? (
              <div className="space-y-2 mb-4 animate-pulse" >
                <div className="h-3.5 w-28 bg-gray-200 dark:bg-coal-700 rounded"></div>
                <div className="h-7 w-64 bg-gray-200 dark:bg-coal-700 rounded"></div>
              </div>
            ) : (
              <div className="mb-4">
                <span className="text-sm font-Regular tracking-widest text-brand-500 dark:text-copper-500 uppercase">
                  RECENT ORDERS
                </span>
                <h2 className="text-2xl font-bold text-brand-900 dark:text-content-primary">
                  Latest Customer Activity
                </h2>
              </div>
            )}

          <div className="space-y-3">
            {isLoading ? (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            ) : (
              <>
                <RecentOrderItem {...recentActivity[0]} />
                <RecentOrderItem {...recentActivity[1]} />
                <RecentOrderItem {...recentActivity[2]} />
                <RecentOrderItem {...recentActivity[3]} />
                <RecentOrderItem {...recentActivity[4]} />
              </>
            )}
          </div>
        </motion.div >
      </div >

    </div >
  );
}