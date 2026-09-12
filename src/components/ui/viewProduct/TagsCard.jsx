const TagsCard = ({ tags }) => {
  return (
    <div className="p-5 rounded-2xl border border-gray-100 dark:border-brand-800 shadow-sm">
      <h2 className="text-[16px] text-gray-400 dark:text-brand-500 block mb-2">
        Tags
      </h2>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-600 dark:bg-brand-900/40 dark:text-brand-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsCard;