import { Link } from 'react-router-dom';

const Card = ({ accommodation }) => {
    const { id, title, cover } = accommodation;

    return (
        <div className="card">
            <Link to={`/accommodation/${id}`}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    );
};

export default Card;