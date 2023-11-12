
const DonationCard = ({ card }) => {
    // console.log(card);

    const { picture, donation_picture, id, category, textColor, category_bg, description, price, cardBackgroundColor, Button, buttonBackgroundColor } = card || {};
    // console.log(donation_picture);

    return (
        <div>
            <div style={{ background: cardBackgroundColor }} className="flex rounded-r-lg mx-auto">
                <div>
                    <img src={donation_picture} alt="image" />
                </div>
                <div className="ml-5">
                    <h4 style={{ background: category_bg, color: textColor }} className="mt-6 w-fit px-2 py-1 rounded-md font-semibold">{category}</h4>
                    <h2 className="md:text-xl font-semibold md:my-2">{description}</h2>
                    <h3 style={{color: textColor }} className="font-semibold text-lg">{price}</h3>
                    <div>
                        <button style={{background:buttonBackgroundColor}} className="text-md px-3 py-2 text-white font-semibold rounded-md mt-4">{Button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;