function UserStatCard({ title, value, icon }) {
  return (
    <div className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1E2435] border border-gray-100/80 dark:border-0 shadow-sm transition-all hover:shadow-md">
      {/* Left side: Label + Value */}
      <div className="min-w-0 pr-3">
        <p className="text-xs sm:text-[16px] font-medium text-[#AB755D] dark:text-[#AB755D] truncate">
          {title}
        </p>
        <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-1 truncate">
          {value}
        </h3>
      </div>

      {/* Right side: Icon Badge */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8F4F28] dark:bg-[#733E2A] flex items-center justify-center text-white dark:text-[#E2D4CD] shrink-0 shadow-sm">
        {icon}
      </div>
    </div>
  );
}

export default UserStatCard;
