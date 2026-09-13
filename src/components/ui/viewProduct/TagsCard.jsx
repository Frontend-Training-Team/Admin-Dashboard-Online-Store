const TagsCard = ({ tags }) => {
  return (
    <div className="p-5 rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-brand-50/20 dark:bg-[#181B22] shadow-xs">
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500 dark:text-[#8A8378] block mb-2.5">
        Tags
      </span>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-lg bg-brand-50 dark:bg-[#1F232B] border border-brand-200/60 dark:border-white/[0.06] px-3 py-1 text-xs font-medium text-brand-800 dark:text-[#B9B2A8]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsCard;
