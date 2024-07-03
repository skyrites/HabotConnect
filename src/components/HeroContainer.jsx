import Input from './UI/Input';
import Button from './UI/Button';

import heroImg from '../assets/hero-image.jpg';
import suitcaseImg from '../assets/icon-suitcase.svg';
import placeholderImg from '../assets/icon-placeholder.svg';

export default function HeroContainer() {
    const heroSection = 'relative w-full';
    const heroContent = 'z-10 absolute inset-0 flex justify-center items-center px-6';
    const heroImageBlock = 'w-full relative';
    return (
        <section className={`${heroSection} hero-section`}>
            <div className={`${heroContent} hero-content `}>
                <div className="container grid grid-cols-1">
                    <div className="col-span-1">
                        <h1 className="hero-title mb-5 text-white font-bold text-3xl lg:text-5xl text-center leading-tight">
                            Are You a Supplier? <span className="font-normal  block">Explore Matching Opportunities.</span>
                        </h1>
                    </div>
                    <div className="grid grid-cols-12 max-w-5xl w-full gap-4 mb-9 mx-auto">
                        <div className="col-span-5">
                            <Input placeholder="Search your required service here" icon={suitcaseImg} iconName="bag" />
                        </div>
                        <div className="col-span-5">
                            <Input placeholder="Search your desired location here" icon={placeholderImg} iconName="bag" />
                        </div>
                        <div className="col-span-2">
                            <Button className="w-full !bg-primary-green hover:!bg-secondary-green">Submit</Button>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h6 className="sub-title text-sm lg:text-lg text-white text-center font-bold">
                            Are you a buyer?{' '}
                            <a href="#" className="underline text-white hover:no-underline font-normal ml-1">
                                Click here if you are looking to post a requirements
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
            <figure className={`${heroImageBlock} hero-image-block`}>
                <img src={heroImg} alt="Are You a Supplier" className="w-full" />
            </figure>
        </section>
    );
}
