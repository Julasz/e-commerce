import { createContext, useState, useContext } from 'react'

const CartContext = createContext();
export const useCartContext = () =>  useContext(CartContext);

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito
    const [itemCantidad, setItemCantidad] = useState(0)
    const [cartTotal, setCartTotal] = useState([])

    function agregarAlCarrito (items){
        setItemCantidad(itemCantidad + items.contador)
        setCartTotal(cartTotal + (items.product.price * items.contador))
        const encontrarItem = cartList.find(itemDelCarrito => itemDelCarrito.product.id === items.product.id)

        if (encontrarItem) {
            encontrarItem.contador = encontrarItem.contador + items.contador
            setCartList(cartList)            
        }else {
            setCartList ([...cartList, items])

        }
    }

    const data = [cartList.product]
    const noDuplicar = new Set(data)
    let result = [...noDuplicar]

    console.log('hola soy el resultado no duplicar', result)


    const removerItem = idItemRemover => {
        setCartList( cartList.filter(itemBuscado => itemBuscado.product.id !== idItemRemover))
        setItemCantidad(itemCantidad - idItemRemover.contador)
        setCartTotal( cartTotal - (idItemRemover.product.price * idItemRemover.contador))
        setCartList(cartList.filter(itemBuscado => itemBuscado.product.id !== idItemRemover))
    }

    const removerCart = () => {
        setItemCantidad(0)
        setCartTotal(0)
        setCartList([])
    }
    
    
    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            removerItem,
            removerCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
