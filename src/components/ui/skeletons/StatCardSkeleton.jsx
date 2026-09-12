function StatCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 border-l-4 border-l-gray-300
    dark:border-l-brand-700/30 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm flex items-center justify-between min-h-[104px] w-full">
      {/* النصوص والسطور */}
      <div className="space-y-2.5">
        <div className={`w-24 h-3 bg-gray-200 dark:bg-brand-800 rounded-md animate-pulse`} />
        <div className={`w-20 h-7 bg-gray-200 dark:bg-brand-800 rounded-md animate-pulse`} />
        <div className={`w-28 h-3 bg-gray-200 dark:bg-brand-800 rounded-md animate-pulse`} />
      </div>

      {/* مربع الأيقونة الجانبي */}
    </div>
  );
}

export default StatCardSkeleton;