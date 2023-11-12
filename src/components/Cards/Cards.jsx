import Card from "../Card/Card";

const Cards = ({cards}) => {
    // console.log(cards);
    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-4  mx-4 md:mx-0 gap-4 my-20">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;