function StatCard({ title, value, desc, icon, color, borderLeft }) {
  return (
    <div className={`flex-1 p-4 sm:p-5 rounded-2xl bg-surface-cardLight dark:bg-surface-cardDark 
    border border-brand-200/60 dark:border-brand-900/40 border-l-[3px] ${borderLeft} shadow-sm shrink-0`}>

      <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${color}`}>
        {icon}
        <span className="pt-0.5 sm:pt-1">{title}</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-semibold text-brand-900 dark:text-brand-50 mt-2 sm:mt-2.5 truncate">
        {value}
      </h3>

      <p className="text-[11px] sm:text-xs text-brand-700/80 dark:text-brand-300/80 mt-1">
        {desc}
      </p>

    </div>
  );
}

export default StatCard;