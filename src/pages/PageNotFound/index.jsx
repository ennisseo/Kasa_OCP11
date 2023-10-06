import { Link } from 'react-router-dom'
import '../../styles/pagenotfound.css'

function PageNotFound() {
    return (
        <div className="page-not-found">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="back-to-home">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default PageNotFound