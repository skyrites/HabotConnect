import Button from './UI/Button';

export default function ReadyToDive() {
    return (
        <section className="pt-12 lg:pt-24 pb-4 px-6">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
                <div>
                    <h2 className="text-black text-4xl font-bold mb-9">Ready to dive into HABOT?</h2>
                    <p>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                    <div className="mt-9">
                        <Button className="!bg-primary-green hover:!bg-secondary-green">
                            <span className=" flex items-center gap-3 px-8">
                                Sign up Today !{' '}
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="17" viewBox="0 0 32 17" fill="none">
                                        <path d="M31.7885 7.52684L24.5159 0.254223C24.2547 -0.050834 23.7956 -0.0863957 23.4905 0.174912C23.1855 0.436157 23.1499 0.895274 23.4112 1.20033C23.4356 1.22877 23.4621 1.25533 23.4905 1.27964L29.5195 7.31591H0.727237C0.325619 7.31591 0 7.64153 0 8.04321C0 8.44489 0.325619 8.77045 0.727237 8.77045H29.5195L23.4905 14.7994C23.1855 15.0606 23.1499 15.5198 23.4112 15.8248C23.6725 16.1299 24.1316 16.1654 24.4366 15.9041C24.4651 15.8798 24.4916 15.8533 24.5159 15.8248L31.7886 8.5522C32.0705 8.26864 32.0705 7.81052 31.7885 7.52684Z" fill="white" />
                                    </svg>
                                </i>
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Abu Dhabi</div>
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Dubai</div>
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Sharjah &amp; Ajman</div>
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Fujairah</div>
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Ras Al Khaimah</div>
                    <div className="border border-third-orange rounded-md p-5 flex justify-center items-center text-lg text-black">Umm Al Quwain</div>
                </div>
            </div>
        </section>
    );
}
