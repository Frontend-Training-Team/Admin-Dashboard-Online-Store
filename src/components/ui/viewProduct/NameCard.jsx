const NameCard = ({ title, description }) => {
  return (
    <div className="p-6 border border-brand-200/60 dark:border-white/[0.06] bg-brand-50/20 dark:bg-[#181B22] rounded-2xl shadow-xs">
      <h2 className="uppercase text-xs font-semibold text-[#C98156] tracking-[2px] mb-2">
        Overview
      </h2>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA] mb-3 leading-snug">
        {title}
      </h1>
      <p className="text-sm text-brand-600/80 dark:text-[#8A8378] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default NameCard;
