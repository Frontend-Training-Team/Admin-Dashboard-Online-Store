const ProductsSkeleton = () => {
    return (
        <div className="space-y-6 animate-pulse">

            <div className="w-full rounded-2xl border border-brand-200/60 dark:border-[#2C241F] bg-white dark:bg-[#1E1916] p-6 shadow-xs">
                <div className="h-3 w-28 rounded-md bg-gray-200 dark:bg-[#2C241F] mb-3" />
                <div className="h-6 w-56 rounded-md bg-gray-300 dark:bg-[#362C25] mb-2.5" />
                <div className="h-3.5 w-44 rounded-md bg-gray-200 dark:bg-[#28201B]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-brand-200/60 dark:border-[#2C241F] bg-white dark:bg-[#1E1916] p-5 shadow-xs flex flex-col justify-center min-h-[110px]"
                    >
                        <div className="h-3 w-16 rounded-md bg-gray-200 dark:bg-[#2C241F] mb-3" />
                        <div className="h-4 w-28 rounded-md bg-gray-300 dark:bg-[#362C25] mb-2.5" />
                        <div className="h-3 w-20 rounded-md bg-gray-200 dark:bg-[#28201B]" />
                    </div>
                ))}
            </div>

            <div className="rounded-2xl border border-brand-200/60 dark:border-[#2C241F] bg-white dark:bg-[#1E1916] p-6 shadow-xs">
                <div className="mb-5">
                    <div className="h-3 w-24 rounded-md bg-gray-200 dark:bg-[#2C241F] mb-2.5" />
                    <div className="h-5 w-48 rounded-md bg-gray-300 dark:bg-[#362C25]" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-100 dark:border-[#2C241F]/60 bg-gray-50/70 dark:bg-[#161210] p-4 flex flex-col justify-center min-h-[85px]"
                        >
                            <div className="h-2.5 w-12 rounded bg-gray-200 dark:bg-[#2C241F] mb-2.5" />
                            <div className="h-3.5 w-16 rounded bg-gray-300 dark:bg-[#362C25] mb-2" />
                            <div className="h-2.5 w-10 rounded bg-gray-200 dark:bg-[#28201B]" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-brand-200/60 dark:border-[#2C241F] bg-white dark:bg-[#1E1916] p-6 min-h-[160px] shadow-xs">
                    <div className="h-3 w-24 rounded-md bg-gray-200 dark:bg-[#2C241F] mb-2.5" />
                    <div className="h-5 w-44 rounded-md bg-gray-300 dark:bg-[#362C25]" />
                </div>

                <div className="rounded-2xl border border-brand-200/60 dark:border-[#2C241F] bg-white dark:bg-[#1E1916] p-6 min-h-[160px] shadow-xs">
                    <div className="h-3 w-24 rounded-md bg-gray-200 dark:bg-[#2C241F] mb-2.5" />
                    <div className="h-5 w-44 rounded-md bg-gray-300 dark:bg-[#362C25]" />
                </div>
            </div>

        </div>
    );
};

export default ProductsSkeleton;