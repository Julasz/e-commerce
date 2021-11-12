
import { useCartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'
import './CartEstilo.scss'


const Cart = () => {

    const {cartList, removerItem, removerCart, cartTotal} = useCartContext()
    
    return (
        <div>
            {cartList.length ? <button className='btn-remover' onClick={() => removerCart()}>Vaciar carrito</button>
            :
            <div className='container-carrito-vacio'>
                <p>¡El carrito está vacío!</p>
                <Link className='link-iniciar-compra' to='/'>Iniciar compra</Link>
            </div>
            }
            <div className={cartList.length ? 'carrito-lleno' : 'carrito-vacio'}>

                {cartList.map(itemAgredado =>
                    <div className='card w-50' key={itemAgredado.product.id}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='itemAgregado-titulo'>{itemAgredado.product.title}</th>
                                    <th className='itemAgregado-price'>{itemAgredado.product.price}</th>
                                    <th className='itemAgregado-cantidad'>{itemAgredado.contador}</th>
                                </tr>
                            </tbody>
                        </Table>
                        <div>
                            <Button className='remover-item' onClick={() => removerItem(itemAgredado.product.id)}>Quitar producto</Button>
                        </div>
                    </div>
                )}

                <div>
                    <h4 className='cartTotal'>El total de la compra es: {cartTotal}</h4>
                </div>

            </div>
            
        </div>
    )
}

export default Cart
