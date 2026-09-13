function Button({ variant = "primary", children, compact = false, ...rest }) {
  const styles = {
    primary:
      "bg-[#C98156] hover:bg-[#b06f47] text-white font-medium shadow-xs",
    secondary:
      "bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200 dark:bg-[#1F232B] dark:hover:bg-[#262B34] dark:text-[#B9B2A8] dark:border-white/[0.08]",
  };

  return (
    <button
      {...rest}
      className={`rounded-xl px-4 text-sm font-medium transition-colors cursor-pointer inline-flex items-center justify-center ${styles[variant]} ${compact ? "h-8 py-1" : "h-10 py-2"}`}
    >
      {children}
    </button>
  );
}

export default Button;
