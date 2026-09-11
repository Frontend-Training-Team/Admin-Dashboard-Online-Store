function Button({ variant = "primary", children, ...rest }) {
  
  const styles = {
    primary: "bg-[#8E4726BF] text-white font-inter dark: bg-[#8E4726BF] dark: bg-[#8E4726BF]",
    secondary: "border border-gray-300 text-[#838383] bg-[#F1F5F9] dark:border-slate-600 dark:text-[#8B95A8] dark:bg-[#1E2435]",
  };

  return (
    <button {...rest} className={`rounded-lg px-4 py-2 text-sm font-medium ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;