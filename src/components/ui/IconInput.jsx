const IconInput = ({ placeholder = 'Placeholder', Type = 'text', className = '', Icon, ...props }) => {
    return (
        <div className="relative flex items-center">
            <input
                type={Type}
                placeholder={placeholder}
                {...props}
                className={`w-full bg-white dark:bg-coal-600 border border-brand-200 dark:border-white/[0.08] text-brand-950 dark:text-content-primary placeholder:text-brand-400 dark:placeholder:text-content-muted py-2.5 pr-4 pl-11 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-copper-500 focus:border-copper-500 transition-colors ${className}`}
            />
            {Icon && (
                <div className="absolute z-10 left-3.5 text-brand-400 dark:text-content-muted">
                    {Icon}
                </div>
            )}
        </div>
    );
};

export default IconInput;
