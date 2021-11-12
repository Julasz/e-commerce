
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import Button from "@restart/ui/esm/Button";
import './cartWidgetEstilo.scss'

export const CartWidget = () => {

    const {itemCantidad} = useCartContext()

    return (
        
        <>
           
            <Link to='/cart' className='contenedor-carrito'>
                <Button className='boton-del-carrito'>
                    <AiOutlineShoppingCart/>
                    <p className='cantidad-carrrito'>{itemCantidad}</p>
                </Button>
            </Link>
            
        </>
    )
}
