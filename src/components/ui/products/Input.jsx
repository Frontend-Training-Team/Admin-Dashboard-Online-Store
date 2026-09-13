import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, error, textarea = false, compact = false, ...rest }, ref) {
  const baseStyle =
    `w-full rounded-xl px-3.5 ${compact ? "py-1.5 text-xs" : "py-2.5 text-sm"} ` +
    (textarea ? (compact ? "min-h-[60px]" : "min-h-[100px]") : (compact ? "h-[36px]" : "h-[42px]")) +
    " bg-white dark:bg-[#1F232B] " +
    " text-brand-950 dark:text-[#F5F1EA] " +
    " border border-brand-200 dark:border-white/[0.08] " +
    " placeholder:text-brand-400 dark:placeholder:text-[#8A8378] " +
    " focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156] transition-colors";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-brand-900 dark:text-[#B9B2A8]">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea ref={ref} rows={compact ? 2 : 4} {...rest} className={baseStyle} />
      ) : (
        <input ref={ref} {...rest} className={baseStyle} />
      )}

      {error && (
        <p className="text-rose-500 text-xs font-medium">{error}</p>
      )}
    </div>
  );
});

export default Input;
