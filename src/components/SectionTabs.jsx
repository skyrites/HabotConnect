import TabBlock from './UI/TabBlock';

export default function SectionTabs() {
    return (
        <section className="py-16 lg:py-36 px-6">
            <div className="container">
                <div className=""></div>
                <div className="rounded-md bg-primary-blue py-16 lg:py-36 px-0 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="col-span-1 lg:col-span-7 max-w-full px-4">
                        <div className="max-w-full">
                            <iframe className="md:w-full md:max-w-xl lg:max-w-full mx-auto  aspect-video" src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=oCRoiDdzb7tY6k-H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-5 px-4">
                        <TabBlock />
                    </div>
                </div>
            </div>
        </section>
    );
}
