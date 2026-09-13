function ProductCardSkeleton() {
  // making Skeleton on the RecentOrderItem and BestSellerItem
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)]
        bg-surface-cardLight dark:bg-[#181B22] shadow-sm h-[64px] w-full ">
      <div className="flex items-center gap-3 ">
        <div className={`bg-gray-200 dark:bg-[#22262F] animate-pulse w-10 h-10 rounded-lg shrink-0`} />
        <div className="space-y-1.5">
          <div className={`w-32 h-4 bg-gray-200 dark:bg-[#22262F] rounded-md animate-pulse`} />
          <div className={`w-24 h-3 bg-gray-200 dark:bg-[#22262F] rounded-md animate-pulse`} />
        </div>
      </div>
      <div className={`w-12 h-4 bg-gray-200 dark:bg-[#22262F] rounded-md animate-pulse`} />
    </div>
  );
}

export default ProductCardSkeleton;