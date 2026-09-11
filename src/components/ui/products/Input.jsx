// Same as before, but with "error" added back — shows a red message under the field
function Input({ label, error, textarea = false, ...rest }) {
  const baseStyle =
    "w-full rounded-lg px-3 py-2 text-sm border-1 border-[#CCCCCC] " +
    " text-gray-900 border-gray-300 " +
    " dark:text-gray-100 dark:border-[#2E364F]";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea rows={4} {...rest} className={baseStyle} />
      ) : (
        <input {...rest} className={baseStyle} />
      )}

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
}

export default Input;