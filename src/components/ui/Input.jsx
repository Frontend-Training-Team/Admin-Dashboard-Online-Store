const Input = ({ placeholder = 'Placeholder', Type, className }) => {
    return (
        <input type={Type}
            placeholder={placeholder}
            className={`
                w-full
                border-2
                py-3 pr-4 ps-5
                rounded-2xl
                text-2xl
                font-bold
                inline-flex items-center gap-2
            ${className}`} />
    );
}

export default Input;