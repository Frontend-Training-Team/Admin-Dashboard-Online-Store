const Input = ({ placeholder = 'Placeholder', Type = 'text', className = '', ...props }) => {
    return (
        <input
            type={Type}
            placeholder={placeholder}
            {...props}
            className={`w-full bg-white dark:bg-[#1F232B] border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-[#F5F1EA] placeholder:text-brand-400 dark:placeholder:text-[#8A8378] py-2.5 px-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#C98156] focus:border-[#C98156] transition-colors ${className}`}
        />
    );
};

export default Input;
