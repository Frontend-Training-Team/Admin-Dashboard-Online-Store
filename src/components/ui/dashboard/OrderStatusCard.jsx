import { motion } from "framer-motion";

function OrderStatusCard({ label, count, textColor, bgStyle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}

      className={`p-3.5 sm:p-5 rounded-xl text-left border ${bgStyle}`}>

      <p className={`text-xs sm:text-sm font-light ${textColor} dark:text-content-muted tracking-wider truncate`}>
        {label}
      </p>

      <p className={`text-2xl sm:text-3xl font-bold mt-0.5 sm:mt-1 ${textColor}`}>
        {count}
      </p>

    </motion.div>
  );
}

export default OrderStatusCard;