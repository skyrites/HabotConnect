export default function Input({ id, icon, iconName, ...props }) {
    return (
        <div className="control relative">
            <i className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 flex justify-center items-center left-3">
                <img src={icon} alt={iconName} />
            </i>
            <input id={id} name={id} required {...props} className="p-2.5 pl-11 pr-3 h-14 bg-white rounded-md text-base placeholder:text-black-2 w-full" />
        </div>
    );
}
