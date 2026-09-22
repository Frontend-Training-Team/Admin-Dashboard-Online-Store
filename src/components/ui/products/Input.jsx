import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, error, textarea = false, compact = false, ...rest }, ref) {
  const baseStyle =
    `w-full rounded-xl px-3.5 ${compact ? "py-1.5 text-xs" : "py-2.5 text-sm"} ` +
    (textarea ? (compact ? "min-h-[60px]" : "min-h-[100px]") : (compact ? "h-[36px]" : "h-[42px]")) +
    " bg-white dark:bg-coal-600 " +
    " text-brand-950 dark:text-content-primary " +
    " border border-brand-200 dark:border-white/[0.08] " +
    " placeholder:text-brand-400 dark:placeholder:text-content-muted " +
    " focus:outline-none focus:ring-1 focus:ring-copper-500 focus:border-copper-500 transition-colors";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-brand-900 dark:text-content-secondary">
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
