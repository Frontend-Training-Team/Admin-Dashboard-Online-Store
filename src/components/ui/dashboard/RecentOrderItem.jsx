import { motion } from "framer-motion";

function RecentOrderItem({ customer, product, status, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-light/60
    dark:bg-coal-700 hover:dark:bg-coal-500 border border-brand-200/50
    dark:border-[rgba(255,255,255,0.06)] gap-3 duration-150 hover:scale-x-[1.02]">

      <div className="min-w-0 flex-1">
        <h4 className="text-base sm:text-xl font-semibold text-brand-900 dark:text-content-primary truncate">
          {customer}
        </h4>
        <p className="text-xs sm:text-sm font-medium text-[#666666] dark:text-content-secondary mt-0.5 truncate">
          {product}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-0.25 shrink-0">
        <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium
        bg-emerald-500/10 text-emerald-600 dark:bg-[rgba(74,222,155,0.10)] dark:text-state-confirmed
        dark:border dark:border-[rgba(74,222,155,0.24)]">
          {status}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-[#666666] dark:text-content-primary text-right min-w-13.75">
          {price}
        </span>
      </div>

    </motion.div>
  );
}

export default RecentOrderItem;