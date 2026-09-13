export default function Settings() {
  return (
    <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-brand-900/40 bg-surface-cardLight dark:bg-[#12141A] shadow-sm">
      <span className="text-sm font-Regular tracking-widest text-[#E8B58F] uppercase">
        Settings
      </span>
      <h1 className="text-3xl font-bold text-black dark:text-brand-50 mt-1">
        Preferences and integrations
      </h1>
      <p className="text-sm text-gray-400 dark:text-[#B9B2A8] mt-1">
        Theme mode, API credentials, and dashboard preferences are managed here.
      </p>
    </div>
  );
}