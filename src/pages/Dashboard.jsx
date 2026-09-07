import React, { useRef, useEffect } from 'react';
import { ShoppingBag, Clock, DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import imgUser from '../assets/images/Guest.jpg'


import StatCard from '../components/ui/dashboard/StatCard';
import OrderStatusCard from '../components/ui/dashboard/OrderStatusCard';
import BestSellerItem from '../components/ui/dashboard/BestSellerItem';
import RecentOrderItem from '../components/ui/dashboard/RecentOrderItem';

function DashboardPage() {

  const scrollRef = useRef(null)

    useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {

        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, []);


  const stats = [
    {
      title: 'Total Orders',
      value: '170',
      desc: 'All Orders Received',
      icon: <ShoppingBag size={18} />,
      color: 'text-[#34A353]',
      borderLeft: 'border-l-emerald-500 dark:border-l-emerald-500',
    },
    {
      title: 'Pending Orders',
      value: '11',
      desc: 'Awaiting Action',
      icon: <Clock size={18} />,
      color: 'text-amber-500',
      borderLeft: 'border-l-amber-500 dark:border-l-amber-500',
    },
    {
      title: 'This Month',
      value: '$0.00',
      desc: 'Monthly Sales Target',
      icon: <ShoppingCart size={18} />,
      color: 'text-sky-500',
      borderLeft: 'border-l-sky-500 dark:border-l-sky-500',
    },
    {
      title: 'Revenue',
      value: '$119,662.26',
      desc: 'Total Gross Revenue',
      icon: <DollarSign size={18} />,
      color: 'text-rose-500',
      borderLeft: 'border-l-rose-500 dark:border-l-rose-500',
    },
    {
      title: 'Top Product',
      value: 'Modern Floor Lamp',
      desc: '53 Units Sold',
      icon: <Package size={18} />,
      color: 'text-purple-500',
      borderLeft: 'border-l-purple-500 dark:border-l-purple-500',
    },
    {
      title: 'Users',
      value: '6',
      desc: 'Registered Customers',
      icon: <Users size={18} />,
      color: 'text-slate-500',
      borderLeft: 'border-l-slate-500 dark:border-l-slate-500',
    },
  ];

  const orderStatuses = [
    {
      label: 'PENDING',
      count: 11,
      textColor: 'text-[#F6B704] dark:text-amber-400',
      bgStyle: 'bg-[#FFF4D3] dark:bg-amber-950/30 border-[#FFDF88] dark:border-amber-900/30'
    },
    {
      label: 'PROCESSING',
      count: 15,
      textColor: 'text-[#4280EF] dark:text-sky-400',
      bgStyle: 'bg-[#E5F5FC] dark:bg-sky-950/30 border-[#ADE6FF] dark:border-sky-900/30'
    },
    {
      label: 'CONFIRMED',
      count: 20,
      textColor: 'text-[#008E5C] dark:text-teal-400',
      bgStyle: 'bg-[#E6F7F1] dark:bg-teal-950/30 border-[#AEFFE2] dark:border-teal-900/30'
    },
    {
      label: 'SHIPPED',
      count: 23,
      textColor: 'text-[#755AB1] dark:text-purple-400',
      bgStyle: 'bg-[#F2EDFD] dark:bg-purple-950/30 border-[#D0BAFF] dark:border-purple-900/30'
    },
    {
      label: 'DELIVERED',
      count: 48,
      textColor: 'text-[#008E5C] dark:text-emerald-400',
      bgStyle: 'bg-[#E6F7F1] dark:bg-emerald-950/30 border-[#AEFFE2] dark:border-emerald-900/30'
    },
    {
      label: 'CANCELLED',
      count: 49,
      textColor: 'text-[#E54335] dark:text-rose-400',
      bgStyle: 'bg-[#FDEAEE] dark:bg-rose-950/30 border-[#FFB8C7] dark:border-rose-900/30'
    },
  ];

  const bestSellers = [
    {
      name: 'Product 1',
      details: '2 Units Sold • $1,437.50',
      img: `${imgUser}`
    },
    {
      name: 'Product 1',
      details: '2 Units Sold • $1,437.50',
      img: `${imgUser}`
    },
    {
      name: 'Product 1',
      details: '2 Units Sold • $1,437.50',
      img: `${imgUser}`
    },
    {
      name: 'Product 1',
      details: '2 Units Sold • $1,437.50',
      img: `${imgUser}`
    },
    {
      name: 'Product 1',
      details: '2 Units Sold • $1,437.50',
      img: `${imgUser}`
    },
  ];

  const recentActivity = [
    { customer: 'Customer', product: 'Product • Sep 3, 2026', status: 'Confirmed', price: '$100' },
    { customer: 'Customer', product: 'Product • Sep 3, 2026', status: 'Delivered', price: '$119' },
    { customer: 'Customer', product: 'Product • Sep 3, 2026', status: 'Confirmed', price: '$100' },
    { customer: 'Customer', product: 'Product • Sep 3, 2026', status: 'Delivered', price: '$119' },
    { customer: 'Customer', product: 'Product • Sep 3, 2026', status: 'Delivered', price: '$119' },
  ];

  return (
    <div className="space-y-6">

      <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
        <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
          ADMIN OVERVIEW
        </span>
        <h1 className="text-3xl font-bold text-brand-900 dark:text-brand-50 mt-1">
          Real-time Store Health
        </h1>
        <p className="text-[14px] text-[#666666] dark:text-brand-300 mt-1">
          Monitor your storefront with live API metrics.
        </p>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth ">
        <StatCard {...stats[0]} />
        <StatCard {...stats[1]} />
        <StatCard {...stats[2]} />
        <StatCard {...stats[3]} />
        <StatCard {...stats[4]} />
        <StatCard {...stats[5]} />
      </div>

      <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
              ORDER STATUS
            </span>
            <h2 className="text-2xl font-bold text-brand-900 dark:text-brand-50">
              Live Fulfillment Breakdown
            </h2>
          </div>
          <span className="text-[11px] px-4 py-1.5 rounded-full font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            Updated from API
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <OrderStatusCard {...orderStatuses[0]} />
          <OrderStatusCard {...orderStatuses[1]} />
          <OrderStatusCard {...orderStatuses[2]} />
          <OrderStatusCard {...orderStatuses[3]} />
          <OrderStatusCard {...orderStatuses[4]} />
          <OrderStatusCard {...orderStatuses[5]} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
          <div className="mb-4">
            <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
              TOP PRODUCTS
            </span>
            <h2 className="text-2xl font-bold text-brand-900 dark:text-brand-50">
              Best Sellers
            </h2>
          </div>

          <div className="space-y-3">
            <BestSellerItem {...bestSellers[0]} />
            <BestSellerItem {...bestSellers[1]} />
            <BestSellerItem {...bestSellers[2]} />
            <BestSellerItem {...bestSellers[3]} />
            <BestSellerItem {...bestSellers[4]} />
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
          <div className="mb-4">
            <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
              RECENT ORDERS
            </span>
            <h2 className="text-2xl font-bold text-brand-900 dark:text-brand-50">
              Latest Customer Activity
            </h2>
          </div>

          <div className="space-y-3">
            <RecentOrderItem {...recentActivity[0]} />
            <RecentOrderItem {...recentActivity[1]} />
            <RecentOrderItem {...recentActivity[2]} />
            <RecentOrderItem {...recentActivity[3]} />
            <RecentOrderItem {...recentActivity[4]} />
          </div>
        </div>

      </div>

    </div>
  );
}

export default DashboardPage  