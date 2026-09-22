import { motion } from "framer-motion";

function BestSellerItem({ name, details, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-surface-light/60 dark:bg-coal-700
    hover:dark:bg-coal-500 border border-brand-200/50 dark:border-[rgba(255,255,255,0.06)] duration-150
    hover:scale-x-[1.02]">

      <img
        src={img}
        alt={name}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover bg-brand-100 dark:bg-coal-700
        dark:brightness-[0.92] dark:border dark:border-[rgba(255,255,255,0.06)] shrink-0"
      />

      <div className="min-w-0 flex-1">
        <h4 className="text-base sm:text-xl font-semibold text-brand-900 dark:text-content-primary truncate">
          {name}
        </h4>
        <p className="text-xs sm:text-sm font-medium text-[#666666] dark:text-content-secondary mt-0.5 truncate">
          {details}
        </p>
      </div>

    </motion.div>
  );
}

export default BestSellerItem;