const ProductsSkeleton = () => {
    return (
        <div className="space-y-6 animate-pulse">
            {/* 1. Header Banner Skeleton */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#12141A] p-6 shadow-xs">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gray-200 dark:bg-coal-700" />
                    <div className="space-y-2">
                        <div className="h-3 w-28 rounded-md bg-gray-200 dark:bg-coal-700" />
                        <div className="h-7 w-40 rounded-md bg-gray-300 dark:bg-coal-500" />
                    </div>
                </div>
                <div className="h-11 w-36 rounded-xl bg-gray-200 dark:bg-coal-700" />
            </div>

            {/* 2. 4 Stats Cards Skeleton (matching ProductsStats) */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-3 rounded-xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#12141A] p-4 shadow-xs"
                    >
                        <div className="h-6 w-6 rounded-md bg-gray-200 dark:bg-coal-700" />
                        <div className="space-y-1.5">
                            <div className="h-7 w-16 rounded-md bg-gray-300 dark:bg-coal-500" />
                            <div className="h-3 w-14 rounded-md bg-gray-200 dark:bg-coal-700" />
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Search & Filter Bar Skeleton */}
            <div className="rounded-2xl border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#12141A] p-4 shadow-xs flex flex-wrap items-center gap-2">
                <div className="h-11 flex-1 min-w-[240px] rounded-xl bg-gray-200 dark:bg-[#1F232B]" />
                <div className="h-11 w-28 rounded-xl bg-gray-200 dark:bg-coal-700" />
                <div className="h-11 w-28 rounded-xl bg-gray-200 dark:bg-coal-700" />
            </div>

            {/* 4. Status Pills Skeleton */}
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-8 w-24 rounded-xl bg-gray-200 dark:bg-coal-700" />
                ))}
            </div>

            {/* 5. Product Cards Grid Skeleton (6 cards matching Figma Node 2624-1514) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex flex-col overflow-hidden rounded-[28px] border border-gray-100/80 dark:border-[rgba(255,255,255,0.06)] bg-white dark:bg-[#12141A] shadow-xs"
                    >
                        {/* Image Placeholder */}
                        <div className="h-64 sm:h-72 w-full bg-gray-200 dark:bg-coal-700" />

                        {/* Content Body Placeholder */}
                        <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                            {/* Category & Brand row */}
                            <div className="flex items-center justify-between">
                                <div className="h-3.5 w-24 rounded-md bg-gray-200 dark:bg-coal-500" />
                                <div className="h-3.5 w-16 rounded-md bg-gray-200 dark:bg-coal-700" />
                            </div>

                            {/* Title */}
                            <div className="h-7 w-3/4 rounded-md bg-gray-300 dark:bg-coal-500" />

                            {/* Description (2 lines) */}
                            <div className="space-y-1.5">
                                <div className="h-3.5 w-full rounded-md bg-gray-200 dark:bg-coal-700" />
                                <div className="h-3.5 w-4/5 rounded-md bg-gray-200 dark:bg-coal-700" />
                            </div>

                            {/* Price */}
                            <div className="h-9 w-32 rounded-md bg-gray-300 dark:bg-coal-500" />

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-coal-700" />
                                <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-coal-700" />
                                <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-coal-700" />
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gray-200/60 dark:bg-[rgba(255,255,255,0.06)]" />

                            {/* Actions row */}
                            <div className="flex items-center justify-between gap-2 pt-1">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-16 rounded-xl bg-gray-200 dark:bg-coal-700" />
                                    <div className="h-8 w-16 rounded-xl bg-gray-200 dark:bg-coal-700" />
                                    <div className="h-8 w-24 rounded-xl bg-gray-200 dark:bg-coal-700" />
                                </div>
                                <div className="h-8 w-20 rounded-xl bg-gray-200 dark:bg-coal-700" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsSkeleton;