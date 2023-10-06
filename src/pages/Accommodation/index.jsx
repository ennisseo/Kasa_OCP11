import { useParams, Navigate } from 'react-router-dom';
import data from '../../data/accommodations.json';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import '../../styles/accommodation.css'
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import HostInfo from '../../components/HostInfo';

function AccommodationDetail() {
    const { id } = useParams();
    const accommodation = data.find(item => item.id === id);

    if (!accommodation) {
        // If accommodation with matching id is not found, navigate to the 404 page
        return <Navigate to="/404" />;
    }

    const { title, location, pictures, description, equipments, rating, host } = accommodation;

    return (
        <>
            <Slideshow pictures={pictures} />
            <section className="accommodation-details">
                <div>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <div className="tags-container">
                        {accommodation.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>
                <div className='right-block'>
                    <HostInfo name={host.name} picture={host.picture} />
                    <Rating rating={rating} />
                </div>
            </section>
            <div className="accommodation-collapse-container">
                <Collapse title="Description" text={description} />
                <Collapse title="Équipements" text={
                    <ul>
                        {equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>} />
            </div>
        </>
    );
}

export default AccommodationDetail;
