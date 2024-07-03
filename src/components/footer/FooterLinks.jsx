export default function FooterLinks({ menuTitle, footerMnuLink }) {
    return (
        <>
            <h3 className="text-white font-bold mb-2">{menuTitle}</h3>
            <ul>
                {footerMnuLink.map((item) => (
                    <li key={item.id} className="mb-2">
                        <a href={item.link} className="text-white text-sm ">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
