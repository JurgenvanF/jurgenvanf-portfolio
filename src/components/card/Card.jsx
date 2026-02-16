import "./Card.scss";

const Card = ({ children }) => {
    return (
        <div className='card__wrapper'>
            {children}
        </div>
    );
};

export default Card;