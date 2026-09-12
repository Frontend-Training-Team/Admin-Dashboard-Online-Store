function Button({ variant = "primary", children, compact=false, ...rest }) {
  
  const styles = {
    primary: "bg-[#8E4726BF] text-white font-inter dark: bg-[#8E4726BF] hover:opacity-80  w-40",
    secondary: " text-[#838383] bg-[#F1F5F9] hover:bg-[#e8eef4] hover:text-[#727272] dark:border-slate-600 dark:text-[#8B95A8] dark:bg-[#191e2c] dark:hover:bg-[#262d42] w-24",
  };

  return (
    <button {...rest} className={` h-10 rounded-lg px-4 py-2 text-sm font-medium ${styles[variant]} ${compact? "h-8" : "h10"}`}>
      {children}
    </button>
  );
}

export default Button;