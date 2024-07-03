import logoImg from '../assets/logo.png';
import Button from './UI/Button';

export default function Header() {
    const classHeader = 'w-full text-gray-700 bg-white shadow-sm body-font';
    const classMenu = 'flex items-center ml-5 font-normal text-headerMenu py-1 px-2 hover:text-gray-900';
    return (
        <header className={classHeader}>
            <div className="container flex flex-col items-center p-5  mx-auto md:flex-row">
                <a href="/" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <img src={logoImg} alt="Habot Connect" />
                </a>
                <nav className="flex items-center justify-center text-base md:ml-auto">
                    <a href="#_" className={classMenu}>
                        Find Suppliers
                    </a>
                    <a href="#_" className="flex items-center ml-5 font-normal text-headerMenu py-1 px-2 hover:text-gray-900">
                        Find Service Tags
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996" stroke="#6D6E71" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </nav>
                <div className="items-center ml-5">
                    <Button outlineButton>Login / Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
