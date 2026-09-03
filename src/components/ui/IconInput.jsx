const IconInput = ({ placeholder = 'Placeholder', Type, className, Icon }) => {
    return (
        <div className="relative flex items-center">
            <input type={Type}
                placeholder={placeholder}
                className={`
                w-full
                border-2
                py-3 pr-4 ps-5 pl-14
                rounded-2xl
                text-2xl
                font-bold
                inline-flex items-center gap-2
            ${className}`} />
            <div className="absolute z-50 left-4">
                {Icon}
            </div>
        </div>
    );
}

export default IconInput;