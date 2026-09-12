import { forwardRef } from "react";

function Input({ label, error, textarea = false, ...rest }, ref) {
  const baseStyle =
    "w-full rounded-lg px-3 py-2 text-sm border-1 border-[#CCCCCC] " +
    " text-gray-900 border-gray-300 " +
    " dark:text-gray-100 dark:border-[#2E364F]";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea ref={ref} rows={4} {...rest} className={baseStyle} />
      ) : (
        <input ref={ref} {...rest} className={baseStyle} />
      )}

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}

export default Input;