
import { useCartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'

//export const useCartContext = () =>  useContext(CartContext);

const Cart = () => {

    const {cartList} = useCartContext()
    
    return (
        <>


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
                        <th>{cartList.product.title}</th>
                        <th>{cartList.product.stock}</th>
                        <th>Total</th>
                    </tr>
                </tbody>

            </Table>
        </>
    )
}

export default Cart
