import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export const Cart = () => {

    const {cartList, removerItem, removerCart} = useCartContext()


    return (
        <div>
            {cartList.length
            ?
            <Button onClick={ () => removerCart()}>Vaciar carrito</Button>
            :
                <div>
                    <h3>¡El carrito está vacío!</h3>
                    <Link to='/'>Comenzar a comprar</Link>
                </div>
            }
            {cartList.map(itemAgregado => 
                <div key={itemAgregado.product.id}>
                    <img src={itemAgregado.product.pictureUrl} alt={itemAgregado.product.title} />
                    <div>
                        <h4>{itemAgregado.product.title}</h4>
                        <p>{itemAgregado.product.description}</p>
                        <p>{itemAgregado.product.price}</p>
                        <p>Cantidad elegida: {itemAgregado.contador}</p>
                    </div>
                    <Button onClicl={ () => removerItem(itemAgregado.product.id)}>Elimiar producto</Button>
                </div>
            
            )}
        </div>
    )
}
