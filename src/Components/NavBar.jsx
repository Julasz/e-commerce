import { CartWidget } from './Components/CartWidget'

const NavBar = () => {
    return(
        <>
            <div className="ContenedorLista">
                <img src="assets/logo1.png" alt="Logo Idraet Lidherma" />

                <ul className="Lista">
                    <li className="Items"><a href='#Nosotros'>Nosotros</a></li>
                    <li className="Items"><a href='#Productos'>Productos</a></li>
                    <li className="Items"><a href='#Contacto'>Contacto</a></li>
                </ul>
                <CartWidget />
            </div>
        </>
    )
}
export default NavBar