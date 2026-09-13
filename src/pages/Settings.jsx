export default function Settings() {
  return (
    <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-white dark:bg-[#12141A] shadow-xs">
      <span className="text-xs font-semibold tracking-wider text-[#C98156] uppercase">
        Settings
      </span>
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-[#F5F1EA] mt-1">
        Preferences and integrations
      </h1>
      <p className="text-sm text-brand-600/70 dark:text-[#8A8378] mt-1.5">
        Theme mode, API credentials, and dashboard preferences are managed here.
      </p>
    </div>
  );
}
