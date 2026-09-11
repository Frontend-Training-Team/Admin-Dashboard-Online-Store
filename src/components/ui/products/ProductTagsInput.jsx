import { useState } from "react";

// A text field + "+" button that builds up a list of tag pills
function ProductTagsInput({ tags, onChange }) {
  // tags     -> current array of tag strings, e.g. ["laptop", "apple"]
  // onChange -> function to call with the updated tags array

  const [draft, setDraft] = useState("");
  // draft = whatever the user is currently typing, BEFORE they hit + or Enter

  const addTag = () => {
    if (!draft.trim()) return; // ignore empty/whitespace-only input
    onChange([...tags, draft.trim()]); // add the new tag to the existing list
    setDraft(""); // clear the input box after adding
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)} // update draft as the user types
          placeholder="Type a tag and press +"
          className="flex-1 border rounded-lg px-3 py-2 text-sm dark:bg-slate-800 dark:border-slate-600 dark:text-gray-100"
        />
        <button onClick={addTag} className="bg-orange-800 text-white rounded-lg px-3">+</button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {/* flex-wrap -> tags move to a new line automatically if there are too many to fit */}
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-100 dark:bg-slate-700 dark:text-gray-100 text-xs px-2 py-1 rounded-full">
            #{tag}{" "}
            <span
              className="cursor-pointer text-gray-400"
              onClick={() => onChange(tags.filter((_, idx) => idx !== i))} // remove this one tag
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