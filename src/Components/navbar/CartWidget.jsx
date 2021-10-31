
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from 'react-router-dom'

export const CartWidget = () => {


    return (

        <>
           
            <Link to='/carrito'><AiOutlineShoppingCart/></Link>
            
        </>
    )
}
