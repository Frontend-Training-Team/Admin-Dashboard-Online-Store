const Input = ({ placeholder = 'Placeholder', Type = 'text', className = '', ...props }) => {
    return (
        <input
            type={Type}
            placeholder={placeholder}
            {...props}
            className={`w-full bg-white dark:bg-coal-600 border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-content-primary placeholder:text-brand-400 dark:placeholder:text-content-muted py-2.5 px-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-copper-500 focus:border-copper-500 transition-colors ${className}`}
        />
    );
};

export default Input;
