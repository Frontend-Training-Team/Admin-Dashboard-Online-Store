import { forwardRef } from "react";

const Select = forwardRef(function Select({ label, options = [], compact = false, ...rest }, ref) {
  
  const baseStyle =
    `w-full rounded-lg px-3 ${compact ? "py-1.5" : "py-2"} text-sm border ` +
    "text-gray-900 border-gray-300 " +
    " dark:text-gray-100 dark:border-slate-600" +
    " focus:outline-none focus:ring-0";

  return (
    <div className="flex flex-col gap-1 ">
      {label && (
        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </label>
      )}
      <select ref={ref} {...rest} className={baseStyle}>
        {options.map((opt) => (
          <option 
          key={opt} 
          value={opt}
          className = "dark:bg-[#252C3F] dark:border-[#2E364F] "
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;