import Button from './UI/Button';

export default function SectionGetVerified() {
    return (
        <section className="bg-light-blue py-10 lg:py-24 px-6">
            <div className="container">
                <div className="grid grid-flow-dense grid-cols-12 justify-center">
                    <div className="col-span-10 col-start-2">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="grow mb-5 md:mb-0">
                                <h2 className="text-2xl lg:text-4xl font-bold text-black">
                                    Let Suppliers <span className="relative after:content-[' '] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-secondary ">Find You</span>
                                </h2>
                            </div>
                            <div className="shrink-0">
                                <Button className="px-14">Get Verified</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
