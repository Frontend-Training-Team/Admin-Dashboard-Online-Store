function ToggleButton({ label, active, onClick }) {
  return (
    <label
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider select-none rounded-xl px-4 py-2.5 border transition-all cursor-pointer ${
        active
          ? "border-[#C98156]/60 bg-[#C98156]/10 text-[#C98156] dark:bg-[#2A1B12] dark:border-[#C98156] dark:text-[#F0CDAF]"
          : "border-brand-200 dark:border-white/[0.08] bg-brand-50/50 dark:bg-[#1F232B] text-brand-600 dark:text-[#8A8378] hover:border-brand-300 dark:hover:border-white/20"
      }`}
    >
      <input
        type="checkbox"
        checked={active}
        onChange={onClick}
        className="w-4 h-4 rounded border-brand-300 accent-[#C98156]"
      />
      {label}
    </label>
  );
}

export default ToggleButton;
