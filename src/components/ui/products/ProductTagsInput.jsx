import { useState } from "react";
import { X, Plus } from "lucide-react";

function ProductTagsInput({ tags, onChange, compact = false }) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    if (!draft.trim()) return;
    onChange([...tags, draft.trim()]);
    setDraft("");
  };

  return (
    <div className={`border border-brand-200 dark:border-white/[0.08] rounded-xl bg-white dark:bg-[#181B22] ${compact ? "p-3" : "p-4"}`}>
      <p className="text-xs font-semibold text-brand-900 dark:text-[#B9B2A8] mb-2">Tags</p>

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
          placeholder="Add a tag..."
          className="flex-1 bg-white dark:bg-[#1F232B] border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-[#F5F1EA] placeholder:text-brand-400 dark:placeholder:text-[#8A8378] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156]"
        />
        <button
          type="button"
          onClick={addTag}
          className="bg-[#C98156] hover:bg-[#b06f47] text-white rounded-xl px-3.5 transition flex items-center justify-center cursor-pointer"
        >
          <Plus size={18} />
        </button>
      </div>

      <p className="text-xs text-brand-500 dark:text-[#8A8378] mt-2">
        Add one or more tags to organize the product.
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 bg-[#C98156]/10 dark:bg-[#2A1B12] text-[#C98156] dark:text-[#F0CDAF] border border-[#C98156]/30 text-xs font-medium px-2.5 py-1 rounded-lg"
            >
              #{tag}
              <button
                type="button"
                onClick={() => onChange(tags.filter((_, idx) => idx !== i))}
                className="hover:text-rose-500 cursor-pointer transition"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductTagsInput;
