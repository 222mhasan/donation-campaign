import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, category, description, picture, cardBackgroundColor, textColor, category_bg } = card || {};

    return (
        <div >
            <Link to={`/cards/${id}`}>
                <div style={{ background: cardBackgroundColor }} className="card card-compact shadow-xl ">
                    <figure><img src={picture} alt="image" /></figure>
                    <div className="card-body">
                        <button className="w-fit px-2 py-1 rounded-md" style={{ background: category_bg }}>
                            <h2 style={{ color: textColor }} className="font-semibold">{category}</h2>
                        </button>
                        <p className="font-semibold text-lg text-center md:text-left" style={{ color: textColor }}>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;