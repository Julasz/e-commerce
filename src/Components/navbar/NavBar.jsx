import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {
    return(
        <>
            <div className="ContenedorLista">
                <Link to="/"> <img src="assets/logo1.png" alt="Logo Idraet Lidherma" /> </Link>

                <ul className="Lista">
                    <li className="Items"><Link to='/'>Lidherma</Link></li>
                    <li className="Items"><Link to='/categoria/rostro'>Rostro</Link></li>
                    <li className="Items"><Link to='/categoria/corporal'>Corporal</Link></li>
                    <li className="Items"><Link to='/categoria/maquillaje'>Maquillaje</Link></li>
                    <li className="Items"><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <CartWidget className="cart-widget"/>

            </div>
        </>
    )
}
export default NavBar