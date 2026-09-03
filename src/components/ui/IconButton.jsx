const Btn = ({ Text = 'button', Type, Icon, className }) => {
    return (<>
        <button type={Type} className={`
            bg-brand-300 
            px-4 py-3
            rounded-md
            capitalize
            text-3xl
            inline-flex items-center gap-2
            hover:bg-brand-500
            ${className}`}>
            {Icon}{Text}</button>
    </>);
}

export default Btn;