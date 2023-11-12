import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const [cards, setCards] = useState([]);

    
    const [notFound, setNotFound] = useState("");

    const [isShow, setIsShow] = useState(false);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        setCards(donationItems);
        if (donationItems) {
            setCards(donationItems);
        }
        else {
            setNotFound("no Data found")
        }
    }, [])



    console.log(isShow);

    return (
        <div>
            {
                notFound ? <div className="flex flex-col items-center justify-center">
                    <img className="max-w-sm" src="https://i.ibb.co/JvGKG2S/no-data-found.jpg" alt="No data found" />
                    <h2>No data found</h2>
                </div> :
                    <div className="container mx-auto my-20">
                        <div className="grid md:grid-cols-2 gap-5 mx-4 md:mx-0 ">
                            {
                                isShow ? cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>) :

                                    cards.slice(0, dataLength).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                            }
                        </div>

                        <button onClick={()=> setIsShow(!isShow)} className="block mx-auto mt-5 md:mt-10 px-4 py-2 rounded-md text-white bg-[#009444]
                        font-semibold text-lg">{!isShow ? "See All" : "See Less"}</button>

                        {/* <button onClick={() => setIsShow()} className="block mx-auto mt-5 md:mt-10 px-4 py-2 rounded-md text-white bg-[#009444]
                        font-semibold text-lg">{!isShow ? "See All" : "See Less"}</button> */}

                        {/* <div className={dataLength === cards.length && 'hidden'}>
                            <button onClick={() => setDataLength()} className="btn btn-primary">See All</button>
                        </div> */}



                    </div>
            }
        </div>
    );
};

export default Donation;