import swal from 'sweetalert';

const CardDetails = ({ card }) => {

    const { id, description, picture, Card_description, price, buttonBackgroundColor } = card || {};

    const handleAddToDonations = () => {
        const addedDonationsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'));
        
        if (!donationItems) {
            addedDonationsArray.push(card);
            localStorage.setItem('donations', JSON.stringify(addedDonationsArray));
            // swal("Thanks for your Donation.");
            swal("Good job!", "Donation Added. Thanks for your Donation. ", "success");
        }
        else {
            const isExists = donationItems.find(card => card.id == id);
            if (!isExists) {
                addedDonationsArray.push(...donationItems, card);
                localStorage.setItem('donations', JSON.stringify(addedDonationsArray));
                swal("Donation Added", "Thanks for your Donation. ", "success");
            }
            else {
                swal("Sorry!", "You Have Already Donated.", "error");
            }
        }

    }

    return (
        <div className="container mx-auto my-10">
            <div>
                <div className="relative">
                    <img className="w-full " src={picture} alt="" />

                    {/* <div className="absolute bottom-8 left-8 ">
                        <button style={{ background: buttonBackgroundColor }} className="text-lg font-semibold text-white px-5 py-4 rounded-md">Donate <span>{price}</span></button>
                    </div> */}

                    <div className="absolute bottom-0 rounded-none w-full">
                        <div className="w-full glass">

                            <div className="card-body">
                                <div className="card-actions ">
                                    <button onClick={handleAddToDonations} style={{ background: buttonBackgroundColor }} className="text-lg font-semibold text-white px-5 py-4 rounded-md">Donate <span>{price}</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <h2 className="text-4xl font-bold mt-10 mb-4">{description}</h2>
                <p>{Card_description}</p>
            </div>


        </div>
    );
};

export default CardDetails;