function ToggleButton({ label, active, onClick, circular = false }) {
  return (
    <label className="w-29 h-13 flex items-center gap-2 text-sm  select-none border border-gray-200 dark:text-[#F0F2F5] dark:border-[#2E364F] rounded-lg px-4 py-2">
      {circular ? (
        <span
          onClick={(e) => { e.preventDefault(); onClick(); }}
          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            active ? "border-cyan-400" : "border-gray-400"
          }`}
        >
          {active && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
        </span>
      ) : (
      <input
        type="checkbox"
        checked={active}
        onChange={onClick}
        className="w-4 h-4 rounded border-gray-300 text-gray-900 accent-[#2C2C2C]"
      />
      )}
      {label}
    </label>
  );
}

export default ToggleButton;