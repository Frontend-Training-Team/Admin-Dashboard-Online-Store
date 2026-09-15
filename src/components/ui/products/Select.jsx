import { forwardRef } from "react";

const Select = forwardRef(function Select({ label, options = [], compact = false, ...rest }, ref) {
  const baseStyle =
    `w-full rounded-xl px-3.5 ${compact ? "py-1.5 text-xs h-[36px]" : "py-2 text-sm h-[42px]"} ` +
    " bg-white dark:bg-[#1F232B] " +
    " text-brand-950 dark:text-[#F5F1EA] " +
    " border border-brand-200 dark:border-white/[0.08] " +
    " focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156] transition-colors";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-brand-900 dark:text-[#B9B2A8]">
          {label}
        </label>
      )}
      <select ref={ref} {...rest} className={baseStyle}>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="bg-white dark:bg-[#1F232B] text-brand-950 dark:text-[#F5F1EA]"
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
