import { useState } from "react";


function ProductTagsInput({ tags, onChange }) {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    if (!draft.trim()) return; 
    onChange([...tags, draft.trim()]); 
    setDraft(""); 
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)} 
          placeholder="Type a tag and press +"
          className="flex-1 border rounded-lg px-3 py-2 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100"
        />
        <button onClick={addTag} className="bg-orange-800 text-white rounded-lg px-3">+</button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 dark:bg-slate-700 dark:text-gray-100 text-xs px-2 py-1 rounded-full">
            #{tag}{" "}
            <span
              className="cursor-pointer text-gray-400"
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