import SkeletonLine from './SkeletonLine';
import SkeletonBlock from './SkeletonBlock';

function ProductCardSkeleton() {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm h-[64px] w-full">
      <div className="flex items-center gap-3">
        <SkeletonBlock className="w-10 h-10 rounded-lg shrink-0" />
        <div className="space-y-1.5">
          <SkeletonLine width="w-32" height="h-4" />
          <SkeletonLine width="w-24" height="h-3" />
        </div>
      </div>
      <SkeletonLine width="w-12" height="h-4" />
    </div>
  );
}

export default ProductCardSkeleton;