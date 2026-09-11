function Select({ label, options = [], ...rest }) {


  const baseStyle =
    "w-full rounded-lg px-3 py-2 text-sm border " +
    "bg-white text-gray-900 border-gray-300 " +
    "dark:bg-slate-800 dark:text-gray-100 dark:border-slate-600";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </label>
      )}
      <select {...rest} className={baseStyle}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;