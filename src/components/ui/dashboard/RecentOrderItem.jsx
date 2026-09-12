function RecentOrderItem({ customer, product, status, price }) {
  return (
    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-light/60 dark:bg-brand-950/30 border border-brand-200/50 dark:border-brand-900/20 gap-3 duration-150 hover:scale-x-[1.02]">

      <div className="min-w-0 flex-1">
        <h4 className="text-base sm:text-xl font-semibold text-brand-900 dark:text-brand-50 truncate">
          {customer}
        </h4>
        <p className="text-xs sm:text-[14px] font-medium text-[#666666] dark:text-brand-300 mt-0.5 truncate">
          {product}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          {status}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-[#666666] dark:text-brand-50 text-right min-w-13.75">
          {price}
        </span>
      </div>

    </div>
  );
}

export default RecentOrderItem;