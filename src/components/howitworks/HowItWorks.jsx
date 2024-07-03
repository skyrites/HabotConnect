import userPlusImg from '../../assets/icon-user-pluse.svg';
import documentImg from '../../assets/icon-document.svg';
import searchImg from '../../assets/icon-search-document.svg';
import editImg from '../../assets/icon-edit.svg';
import quoteRequestImg from '../../assets/icon-quote-request.svg';
import handshakeImg from '../../assets/icon-handshake.svg';

export default function HowItWorks() {
    const oddEvenBlock = 'even:bg-white odd:bg-light-blue';
    const cardBlock = ' py-11 px-5 text-center h-full flex justify-center ';
    const cardInnerBlock = 'max-w-[18.75rem] flex flex-col items-center gap-9';
    return (
        <section className="how-it-works py-16 lg:py-36 px-6">
            <div className="container">
                <div className="grid grid-flow-row-dense grid-cols-12">
                    <div className="col-span-10 mb-16 col-end-1">
                        <h2 className="text-black-1 mb-6 text-center font-bold text-4xl">How it works?</h2>
                        <p className="text-black text-lg text-center">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                    </div>
                </div>
                <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3">
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={userPlusImg} alt="Select Your Role and Sign Up" />
                                </figure>
                                <p>Select Your Role and Sign Up</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={documentImg} alt="Buyers Post Your Requirements" />
                                </figure>
                                <p>Buyers Post Your Requirements</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={searchImg} alt=" Review, Select, and Contact the Best Suppliers" />
                                </figure>
                                <p> Review, Select, and Contact the Best Suppliers</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={editImg} alt=" Suppliers Complete your profile and get notified for opportunities" />
                                </figure>
                                <p> Suppliers Complete your profile and get notified for opportunities</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={quoteRequestImg} alt="Contact to Buyers and Share your Quote for the service" />
                                </figure>
                                <p>Contact to Buyers and Share your Quote for the service</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${oddEvenBlock} col-span-1`}>
                        <div className={cardBlock}>
                            <div className={cardInnerBlock}>
                                <figure>
                                    <img src={handshakeImg} alt="Both the Parties can Connect and Make Business Leave a Feedback" />
                                </figure>
                                <p>Both the Parties can Connect and Make Business Leave a Feedback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
