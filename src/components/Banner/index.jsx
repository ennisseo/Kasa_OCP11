import { useLocation } from 'react-router-dom';
import '../../styles/banner.css'

function Banner({ title }) {
    const { pathname } = useLocation();
    let imageClass = pathname.includes("about") ? "about" : "home";

    return (
        <div className={`banner ${imageClass}`}>
            <h1>{title}</h1>
        </div>
    )
}

export default Banner