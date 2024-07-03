import logoImg from '../../assets/footer-logo.svg';
import FooterLinks from './FooterLinks';
import SocialLink from './SocialLink';
import { FOOTER_MENU_COMPANY, FOOTER_MENU_TERMS, FOOTER_MENU_RELATED } from '../../util/footerLink';

export default function Footer() {
    return (
        <footer className="bg-third py-10 px-6">
            <div className="container border-t border-b border-white border-opacity-20 py-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-3 order-last lg:order-1">
                        <div className="pl-5">
                            <figure className="m-0 mb-4">
                                <img src={logoImg} alt="Habot" className="mx-auto" />
                            </figure>
                            <p className="text-white pl-2 text-center lg:text-left">&copy; R Singhania</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
                        <div className="flex justify-center lg:justify-start gap-6">
                            <div className=" min-w-[6.5rem]">
                                <FooterLinks menuTitle="Company" footerMnuLink={FOOTER_MENU_COMPANY} />
                            </div>
                            <div className=" min-w-[6.5rem]">
                                <FooterLinks menuTitle="Terms" footerMnuLink={FOOTER_MENU_TERMS} />
                            </div>
                            <div className=" min-w-[6.5rem]">
                                <FooterLinks menuTitle="Related" footerMnuLink={FOOTER_MENU_RELATED} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 items-center flex justify-center lg:justify-end mb-8 lg:mb-0">
                        <SocialLink />
                    </div>
                </div>
            </div>
        </footer>
    );
}
