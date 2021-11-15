import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import './cartWidgetEstilo.scss';

const CartWidget = () => {

        const {itemCantidad} = useCartContext()

            return (
                <Link to="/cart" className="contenedor-carrito">
                    <button className="boton-del-carrito">
                        <AiOutlineShoppingCart/>
                        <p className="cantidad-carrrito">{itemCantidad}</p>
                    </button>
                </Link>
            )
        }

export default CartWidget