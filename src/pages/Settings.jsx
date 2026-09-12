export default function Settings() {
  return (
    <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-surface-cardDark shadow-sm">
      <span className="text-[14px] font-Regular tracking-widest text-brand-500 uppercase">
        Settings
      </span>
      <h1 className="text-3xl font-bold text-black dark:text-brand-50 mt-1">
        Preferences and integrations
      </h1>
      <p className="text-[14px] text-gray-400 dark:text-brand-300 mt-1">
        Theme mode, API credentials, and dashboard preferences are managed here.
      </p>
    </div>
  );
}