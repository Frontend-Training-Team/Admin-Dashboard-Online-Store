import SkeletonLine from './SkeletonLine';
import SkeletonAvatar from './SkeletonAvatar';

function TableSkeleton({ rows = 5 }) {
  return (
    <div className="w-full p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm space-y-4">
      <div className="flex justify-between items-center mb-4">
        <SkeletonLine width="w-48" height="h-6" />
        <SkeletonLine width="w-24" height="h-8" className="rounded-lg" />
      </div>
      <div className="space-y-3">
        {[...Array(rows)].map((_, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800/50">
            <div className="flex items-center gap-3">
              <SkeletonAvatar size="h-10 w-10" shape="rounded-full" />
              <div className="space-y-1.5">
                <SkeletonLine width="w-32" height="h-4" />
                <SkeletonLine width="w-24" height="h-3" />
              </div>
            </div>
            <SkeletonLine width="w-20" height="h-4" />
            <SkeletonLine width="w-16" height="h-6" className="rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableSkeleton;
