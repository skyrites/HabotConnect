import facebookImg from '../../assets/icon-facebook.svg';
import linkedinImg from '../../assets/icon-linkedin.svg';
import twitterImg from '../../assets/icon-twitter.svg';
import instagramImg from '../../assets/icon-instagram.svg';
export default function SocialLink() {
    const list = 'flex itemc-center gap-4';
    const listItemLink = 'w-10 h-10 border border-white border-opacity-20 opacity-90 flex justify-center items-center rounded-full hover:opacity-100 hover:border-opacity-100 transition-all ease-in-out delay-150 hover:border-2';
    return (
        <ul className={list}>
            <li>
                <a href="#" className={listItemLink}>
                    <img src={linkedinImg} alt="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="#" className={listItemLink}>
                    <img src={twitterImg} alt="Twitter" />
                </a>
            </li>
            <li>
                <a href="#" className={listItemLink}>
                    <img src={facebookImg} alt="Facebook" />
                </a>
            </li>
            <li>
                <a href="#" className={listItemLink}>
                    <img src={instagramImg} alt="Instagram" />
                </a>
            </li>
        </ul>
    );
}
