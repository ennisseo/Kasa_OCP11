import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Kasa</Link> <br />
            <Link to="/">Accueil</Link> <br />
            <Link to="/a-propos">A propos</Link>
        </nav>
    )
}

export default Header