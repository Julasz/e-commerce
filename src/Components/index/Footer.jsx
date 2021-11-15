import { Link } from "react-router-dom"
import './Footer.scss'

const Footer = () => {
    return (
        <nav className="ContenedorLista">
            <Link to="/"><img className="navbar-logo" src="../assets/logo1.png" alt="Logo Idraet.Lidherma"/></Link>
            <ul className="Lista">
                <li className="Items"><Link to="/">Volver al inicio</Link></li>
                <li className="Items"><Link to="/contacto">Contactanos</Link></li>
                <li className="Items"><Link to="https://www.instagram.com/lidherma/">Instagram</Link></li>
                <li className="Items"><Link to="https://www.facebook.com/search/top?q=lidherma">Facebook</Link></li>
            </ul>
        </nav>
    )
}

export default Footer
