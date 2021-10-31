import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <>
            <div className="ContenedorLista">
                <Link to="/"> <img src="assets/logo1.png" alt="Logo Idraet Lidherma" /> </Link>

                <ul className="Lista">
                    <li className="Items"><Link to='/'>Nosotros</Link></li>
                    <li className="Items"><Link to='/productos'>Productos</Link></li>
                    <li className="Items"><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <CartWidget className="cart-widget"/>

            </div>
        </>
    )
}
export default NavBar