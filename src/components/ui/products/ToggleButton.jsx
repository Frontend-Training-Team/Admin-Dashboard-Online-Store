function ToggleButton({ label, active, onClick }) {
  return (
    <label
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider select-none rounded-xl
        px-4 py-2.5 border transition-all cursor-pointer
        ${active
          ? "border-copper-500/60 bg-copper-500/10 text-copper-500 dark:bg-copper-900 dark:border-copper-500 dark:text-copper-200"
          : "border-brand-200 dark:border-white/[0.08] bg-brand-50/50 dark:bg-coal-600 text-brand-600 dark:text-content-muted hover:border-brand-300 dark:hover:border-white/20"
        }`}
    >
      <input
        type="checkbox"
        checked={active}
        onChange={onClick}
        className="w-4 h-4 rounded border-brand-300 accent-copper-500"
      />
      {label}
    </label>
  );
}

export default ToggleButton;
