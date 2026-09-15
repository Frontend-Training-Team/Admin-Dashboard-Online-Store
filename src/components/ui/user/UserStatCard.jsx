function UserStatCard({ title, value, icon, className = "" }) {
  return (
    <div className="flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#12141A]
    border border-gray-100/80 dark:border-[rgba(255,255,255,0.06)] shadow-xs transition-all hover:shadow-md">
      {/* Left side: Label + Value */}
      <div className="min-w-0 pr-3">
        <p className={`text-xs sm:text-[14px] font-medium font-Inter text-[#8E4726] dark:text-[#A8653F] uppercase tracking-wider truncate ${className}`}>
          {title}
        </p>
        <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-[#F5F1EA] mt-1 truncate">
          {value}
        </h3>
      </div>

      {/* Right side: Icon Badge */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#8e4726e1] dark:bg-[#A8653F] dark:text-[#F0CDAF] dark:border dark:border-[rgba(201,129,86,0.25)] flex items-center justify-center text-white shrink-0 shadow-xs">
        {icon}
      </div>
    </div>
  );
}

export default UserStatCard;
