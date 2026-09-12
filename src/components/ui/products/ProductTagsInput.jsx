import { useState } from "react";

function ProductTagsInput({ tags, onChange , compact=false}) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    if (!draft.trim()) return;
    onChange([...tags, draft.trim()]);
    setDraft("");
  };

  return (
    <div className={`border border-gray-200 dark:border-slate-600 rounded-xl ${compact ? "p-2" : "p-4"}`}>
      <p className="text-sm font-medium mb-2 dark:text-gray-400">Tags</p>

      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
          placeholder="Example"
          className="flex-1 border border-gray-200 dark:border-slate-600 dark:text-gray-100 rounded-lg px-3 py-2 text-sm"
        />
        <button
          type="button"
          onClick={addTag}
          className="bg-[#8E4726BF] text-white rounded-lg px-4 text-xl"
        >
          +
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        Add one or more tags to organize the product.
      </p>

      <div className="flex flex-wrap gap-2 mt-3 ">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#8E4726BF] text-[white] dark:bg-slate-700 dark:text-gray-100 text-xs px-2 py-1 rounded-full"
          >
            #{tag}{" "}
            <span
              className="cursor-pointer text-gray-400 "
              onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
            >
              ✕
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductTagsInput;