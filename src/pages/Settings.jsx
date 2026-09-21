export default function Settings() {
  return (
    <div className="p-6 rounded-2xl border border-brand-200/60 dark:border-white/[0.06] bg-white dark:bg-coal-800 shadow-xs">
          <span className="text-xs font-semibold tracking-wider text-copper-500 uppercase">
            Settings
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-950 dark:text-content-primary mt-1">
            Preferences and integrations
          </h1>
      <p className="text-sm text-brand-600/70 dark:text-content-muted mt-1.5">
      Theme mode, API credentials, and dashboard preferences are managed here.
    </p>
  </div>
  );
}
