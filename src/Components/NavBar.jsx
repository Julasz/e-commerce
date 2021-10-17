import { CartWidget } from './CartWidget'

const NavBar = () => {
    return(
        <>
            <div className="ContenedorLista">
                <a href="#Nosotrs"> <img src="assets/logo1.png" alt="Logo Idraet Lidherma" /> </a>

                <ul className="Lista">
                    <li className="Items"><a href='#Nosotros'>Nosotros</a></li>
                    <li className="Items"><a href='#Productos'>Productos</a></li>
                    <li className="Items"><a href='#Contacto'>Contacto</a></li>
                </ul>
                <CartWidget className="cart-widget" />
            </div>
        </>
    )
}
export default NavBar