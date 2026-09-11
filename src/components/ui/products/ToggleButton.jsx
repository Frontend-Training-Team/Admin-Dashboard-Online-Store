function ToggleButton({ label, active, onClick }) {

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
        active
          ? " text-black border-[#CCCCCC]" 
          : "bg-transparent text-gray-500 border-gray-300 dark:border-slate-600 dark:text-gray-400" 
      }`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-current" />
      {/* small dot indicator, bg-current = same color as the text color above */}
      {label}
    </button>
  );
}

export default ToggleButton;