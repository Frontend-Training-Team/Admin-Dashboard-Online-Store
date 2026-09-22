import { motion } from "framer-motion";

function StatCard({ title, value, desc, icon, color, borderLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex-1 p-4 sm:p-5 rounded-2xl bg-surface-cardLight dark:bg-coal-800 
    border border-brand-200/60 dark:border-[rgba(255,255,255,0.06)] border-l-[3px] ${borderLeft} shadow-sm shrink-0`}>

      <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${color}`}>
        {icon}
        <span className="pt-0.5 sm:pt-1">{title}</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-semibold text-brand-900 dark:text-content-primary mt-2 sm:mt-2.5 truncate">
        {value}
      </h3>

      <p className="text-[11px] sm:text-xs text-brand-700/80 dark:text-content-muted mt-1">
        {desc}
      </p>

    </motion.div>
  );
}

export default StatCard;