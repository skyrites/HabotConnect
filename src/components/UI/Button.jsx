export default function Button({ children, outlineButton, className, ...props }) {
    // button style
    const outlineGreenButton = 'border border-primary rounded-md py-3 px-6 text-primary text-base font-bold bg-transparent  hover:bg-primary hover:text-white transition-all';
    const fillButton = 'rounded-md py-3 px-6 font-bold text-white text-lg  transition-all bg-primary-orange hover:bg-secondary-orange focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';

    let cssClasses = outlineButton ? outlineGreenButton : fillButton;
    cssClasses += ' ' + className;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    );
}
