const NameCard = ({ title, description }) => {
  return (
    <div className="p-6 border border-brand-200/60 dark:border-white/[0.06] bg-brand-50/20 dark:bg-coal-700 rounded-2xl shadow-xs">
      <h2 className="uppercase text-xs font-semibold text-copper-500 tracking-[2px] mb-2">
        Overview
      </h2>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-content-primary mb-3 leading-snug">
        {title}
      </h1>
      <p className="text-sm text-brand-600/80 dark:text-content-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default NameCard;
