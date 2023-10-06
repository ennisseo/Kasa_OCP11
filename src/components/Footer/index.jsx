import { Link } from 'react-router-dom'
import '../../styles/footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
    return (
        <footer>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo Kasa" className="footer-logo" />
                </Link>
            </div>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer