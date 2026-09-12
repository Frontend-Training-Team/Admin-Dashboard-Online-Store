function ToggleButton({ label, active, onClick, circular = false }) {
  return (
    <label
      className={`flex items-center gap-2 text-sm select-none rounded-full px-4 py-2 border transition-colors ${
        active
          ? "border-[#e5aa70] bg-[#eae0c8] text-[#6f4e37] dark:text-[#6f4e37]"
          : "border-gray-200 dark:border-[#2E364F] dark:text-[#F0F2F5]"
      }`}
    >
      {circular ? (
        <span
          onClick={(e) => { e.preventDefault(); onClick(); }}
          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
            active ? "border-[#8E4726BF]" : "border-gray-400"
          }`}
        >
          {active && <span className="w-2 h-2 rounded-full bg-[#e5aa70]" />}
        </span>
      ) : (
        <input
          type="checkbox"
          checked={active}
          onChange={onClick}
          className="w-4 h-4 rounded border-gray-300 accent-[#2C2C2C]"
          
        />
      )}
      {label}
    </label>
  );
}

export default ToggleButton;