const DetailsCard = ({ title, cardData }) => {
  return (
    <div className="p-5 border border-brand-200/60 dark:border-white/[0.06]
    bg-brand-50/20 dark:bg-[#181B22]rounded-2xl shadow-xs">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-[#8A8378] block mb-1.5">
        {title}
      </span>
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA]">
        {cardData}
      </h3>
    </div>
  );
};

export default DetailsCard;
