function ToggleButton({ label, active, onClick }) {
  
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer select-none">

      <input
        type="checkbox"
        checked={active}
        onChange={onClick}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500
                   dark:bg-slate-800 dark:border-slate-600"
      />
      {label}
    </label>
  );
}

export default ToggleButton;