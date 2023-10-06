import Star from '../../assets/star.svg';
import StarFilled from '../../assets/star-filled.svg';
import '../../styles/rating.css';

function Rating({ rating }) {
    const numberOfStars = 5;
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
        const starType = i < rating ? StarFilled : Star;
        stars.push(<img key={i} src={starType} alt={`star-${i + 1}`} className="star" />);
    }

    return (
        <div className="star-rating">
            {stars}
        </div>
    );
}

export default Rating;
