import { motion } from 'framer-motion';

const DetailsCard = ({ title, cardData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-5 border  border-brand-200/60 dark:border-white/[0.06]
    bg-brand-50/20 dark:bg-coal-700 rounded-2xl shadow-xs">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-content-muted block mb-1.5">
        {title}
      </span>
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-950 dark:text-content-primary">
        {cardData}
      </h3>
    </motion.div>
  );
};

export default DetailsCard;
