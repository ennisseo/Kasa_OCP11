import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" className="header-logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "active" : ""
                    }>Accueil</NavLink></li>
                    <li><NavLink to="/about">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header