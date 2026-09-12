import SkeletonLine from './SkeletonLine';
import SkeletonBlock from './SkeletonBlock';

function StatCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 border-l-4 border-l-gray-300 dark:border-l-gray-700 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm flex items-center justify-between min-h-[104px] w-full">
      {/* النصوص والسطور */}
      <div className="space-y-2.5">
        <SkeletonLine width="w-24" height="h-3.5" />
        <SkeletonLine width="w-20" height="h-7" />
        <SkeletonLine width="w-28" height="h-3" />
      </div>

      {/* مربع الأيقونة الجانبي */}
      <SkeletonBlock className="w-10 h-10 rounded-xl shrink-0" />
    </div>
  );
}

export default StatCardSkeleton;