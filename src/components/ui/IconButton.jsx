const Btn = ({ Text = 'button', Type = 'button', Icon, className = '', ...props }) => {
    return (
        <button
            type={Type}
            {...props}
            className={`bg-copper-500 hover:bg-[#b06f47] text-white px-4 py-2.5 rounded-xl font-medium text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs ${className}`}
        >
            {Icon}
            <span>{Text}</span>
        </button>
    );
};

export default Btn;
