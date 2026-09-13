function StatCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)]
    border-l-4 border-l-gray-300 dark:border-l-[#262B34] bg-surface-cardLight dark:bg-[#12141A]
    shadow-sm flex items-center justify-between min-h-[104px] w-full">
      <div className="space-y-2.5">
        <div className={`w-24 h-3 bg-gray-200 dark:bg-[#181B22] rounded-md animate-pulse`} />
        <div className={`w-20 h-7 bg-gray-200 dark:bg-[#181B22] rounded-md animate-pulse`} />
        <div className={`w-28 h-3 bg-gray-200 dark:bg-[#181B22] rounded-md animate-pulse`} />
      </div>

    </div>
  );
}

export default StatCardSkeleton;